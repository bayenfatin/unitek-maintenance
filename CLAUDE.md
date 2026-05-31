@AGENTS.md

# Ce qu'on a construit — session 2026-05

## Stack réelle (pas celle de ton training data)
- Next.js **16.2.6**, React 19.2.4 — `params` dans les Server Components est une **Promise**, toujours `await params`
- Tailwind **v4** — pas de `tailwind.config.*`. Tout est dans `globals.css` via `@theme inline { --color-brand: oklch(...) }`. Les classes `bg-brand`, `text-brand-dark` etc. viennent de là.
- Fonts : Space Grotesk (`--font-space`) pour les titres, Inter (`--font-inter`) pour le corps — déjà dans `layout.tsx`
- `AnimateIn` est un Client Component (`"use client"`) dans `src/components/ui/` — importable dans Server Components, ok

## Pages de service créées
Toutes dans le route group `src/app/(services)/` → URL sans le segment `(services)`.

| URL | Fichier | SVG principal |
|-----|---------|---------------|
| `/supervision-donnees-maintenance-4-0` | `supervision-donnees-maintenance-4-0/page.tsx` | MonitoringViz (canaux signal) + PipelineArch + DashboardMockup |
| `/maintenance-preventive-predictive-cnc` | `maintenance-preventive-predictive-cnc/page.tsx` | MachineDiagram (centre d'usinage annoté) + RiskMatrix AMDEC + VibrationChart |
| `/retrofit-machine-outil-automate` | `retrofit-machine-outil-automate/page.tsx` | BeforeAfterSVG (SINUMERIK 3 → 840D sl) |
| `/maintenance-presse-injection-plastique` | `maintenance-presse-injection-plastique/page.tsx` | PlastificationSVG (vis + barrel 4 zones thermiques + 5 points annotés) + RiskMatrixPlasturgie |

Chaque page : `export const metadata`, JSON-LD `Service` via `dangerouslySetInnerHTML`, `AnimateIn` pour les reveals, oklch dark theme inline.

## Blog / Actualités Industrielles
URL : `/blog` — affiché partout sous le label "Actualités Industrielles".

**Mode actuel : mock offline** (déployable sans WordPress)
- `src/lib/mock-posts.ts` — 3 articles fictifs (maintenance hydraulique, AMDEC TRS, rétrofit KEBA). Contient `MOCK_POSTS` (list items), `MOCK_POSTS_FULL` (articles complets), `MOCK_CARD_META` (gradient + catégorie par index).
- `blog/page.tsx` et `blog/[slug]/page.tsx` importent depuis `mock-posts.ts` — **pas** depuis `wpgraphql.ts`.

**Pour rebrancher WordPress** : remplacer les imports mock dans les deux fichiers blog par `getAllPosts` / `getPostBySlug` / `getAllSlugs` depuis `@/lib/wpgraphql`, définir `NEXT_PUBLIC_WP_GRAPHQL_URL=https://cms.unitek-automation.fr/graphql` dans `.env.local`.
- `wpgraphql.ts` et `types/blog.ts` sont intacts et prêts.
- Plugin WP requis pour le SEO : `wp-graphql-rank-math`.
- `next.config.ts` a déjà `remotePatterns` pour `cms.unitek-automation.fr`.

**Contenu sans `@tailwindcss/typography`** : dans `[slug]/page.tsx` on stye le HTML via `[&>h2]:`, `[&>p]:`, `[&>ul>li]:` (Tailwind v4 arbitrary variants) — ça remplace `prose` sans le plugin.

## Navigation (Header + Footer)
- `src/components/layout/Header.tsx` — Client Component avec `usePathname()` pour état actif
- Mobile menu : backdrop `z-40` + `fadeIn` CSS, groupe "Nos expertises" séparé des liens utilitaires
- Règle ESLint bloquante : `setMenuOpen(false)` dans un `useEffect([pathname])` → interdit. Les `onClick` sur chaque lien suffisent.
- Toutes les routes dans `NAV_LINKS` avec `isPage: true` reçoivent `aria-current="page"` automatiquement via `isActive()`.
- **Liens actuels dans le nav** : Maintenance CNC, Rétrofit CNC, Supervision 4.0, Presses Plastique, Actualités (`/blog`), Contact (`/contact`).
- Plus aucun `/#contact` ou `/#ancre` dans le nav — tout pointe vers des routes réelles.

## Gotchas ESLint / TypeScript rencontrés
- `Panel` défini dans le corps d'une fonction composant → `react-hooks/static-components`. Fix : déplacer à niveau module.
- Apostrophes dans JSX text → `&apos;` obligatoire (pas dans les string literals, seulement dans le JSX)
- `map((item, i) => ...)` avec `i` inutilisé → warning `no-unused-vars`. Supprimer le paramètre.

## Gotcha critique — Vercel prerender crash
`onMouseEnter` / `onMouseLeave` sur un élément HTML dans un **Server Component** → crash à la génération statique avec `digest: '3376773368'` (event handlers cannot be passed to Client Component props). **Fix : `hover:brightness-95`** ou toute classe Tailwind `hover:` — jamais de handler JS inline dans un Server Component. C'est ce qui bloquait le build Vercel sur `/supervision-donnees-maintenance-4-0`.

## Pattern : metadata + interactivité dans la même route
`export const metadata` **ne peut pas** coexister avec `"use client"` dans le même fichier. Solution systématique :
- `page.tsx` → Server Component (exporte `metadata`, layout statique)
- `NomDuComposant.tsx` dans le même dossier → `"use client"` (logique interactive)
- Exemple : `src/app/contact/page.tsx` + `src/app/contact/ContactForm.tsx`

## Design system (couleurs importantes)
```
--color-brand:       oklch(42% 0.135 240)   /* bleu principal */
--color-brand-dark:  oklch(22% 0.08 240)    /* fond dark sections */
--color-urgent:      oklch(52% 0.21 25)     /* orange — CTA urgence uniquement */
--color-surface:     oklch(98.5% 0.005 240) /* fond clair */
```
Hero des pages service : `oklch(13% 0.048 240)` (plus sombre que brand-dark).
Tous les coins sont **carrés** (zéro `rounded-*`) — identité industrielle.

## Pages utilitaires créées (session 2026-05)
- `/mentions-legales` et `/politique-confidentialite` — **faites**. Contenu générique B2B français. `robots: { index: false, follow: true }` pour protéger le budget de crawl (noindex + follow = liens transmettent leur valeur sans indexer les pages légales).
- `/contact` — **faite**. JSON-LD `LocalBusiness` complet (NAP Saint-Fons, GeoCoordinates 45.69/4.87, OpeningHours, GeoCircle 150 km). Formulaire → mailto builder côté client (pas de backend). `ContactForm.tsx` est le Client Component.

## À faire (non terminé)
- **Rebrancher WordPress** quand le CMS est prêt (voir section Blog ci-dessus)
- Webhook `/api/revalidate` pour la revalidation on-demand depuis WordPress
- Compléter les placeholders dans le contenu : numéro SIRET, adresse exacte, numéro de téléphone réel (`04 XX XX XX XX` → vrai numéro) dans `/contact/page.tsx`, `/mentions-legales/page.tsx`, `/politique-confidentialite/page.tsx` et le JSON-LD LocalBusiness
- Plugin `@tailwindcss/typography` toujours non installé — contournement en place via `[&>h2]:` etc. dans `blog/[slug]/page.tsx`
