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

Chaque page : `export const metadata`, JSON-LD `Service` via `dangerouslySetInnerHTML`, `AnimateIn` pour les reveals, oklch dark theme inline.

## Blog WordPress headless
- `src/lib/wpgraphql.ts` — fetch natif avec `next: { revalidate: 3600 }`, pas Apollo
- `src/types/blog.ts` — interfaces `WPPost`, `RankMathSeo`, `GraphQLResponse<T>`
- `src/app/blog/page.tsx` + `src/app/blog/[slug]/page.tsx`
- Rank Math expose le champ `seo` via `NodeWithRankMathSeo` (plugin WP requis : `wp-graphql-rank-math`)
- Variable à définir : `NEXT_PUBLIC_WP_GRAPHQL_URL=https://cms.unitek-automation.fr/graphql` dans `.env.local`
- `next.config.ts` a `remotePatterns` pour `cms.unitek-automation.fr` (images WP)
- `generateStaticParams` + `generateMetadata` tous les deux dans `[slug]/page.tsx`

## Navigation (Header + Footer)
- `src/components/layout/Header.tsx` — Client Component avec `usePathname()` pour état actif
- `#retrofit` **n'existait pas** dans le DOM de la homepage — ancre morte. Maintenant → `/retrofit-machine-outil-automate`
- Les 3 routes de service sont dans Header ET Footer → zéro page orpheline pour Googlebot
- Mobile menu : backdrop `z-40` + `fadeIn` CSS, groupe "Nos expertises" séparé des liens utilitaires
- Règle ESLint bloquante : `setMenuOpen(false)` dans un `useEffect([pathname])` → interdit. Supprimer l'effet, les `onClick` sur chaque lien suffisent.

## Gotchas ESLint / TypeScript rencontrés
- `Panel` défini dans le corps d'une fonction composant → `react-hooks/static-components`. Fix : déplacer à niveau module.
- Apostrophes dans JSX text → `&apos;` obligatoire (pas dans les string literals, seulement dans le JSX)
- `map((item, i) => ...)` avec `i` inutilisé → warning `no-unused-vars`. Supprimer le paramètre.

## Design system (couleurs importantes)
```
--color-brand:       oklch(42% 0.135 240)   /* bleu principal */
--color-brand-dark:  oklch(22% 0.08 240)    /* fond dark sections */
--color-urgent:      oklch(52% 0.21 25)     /* orange — CTA urgence uniquement */
--color-surface:     oklch(98.5% 0.005 240) /* fond clair */
```
Hero des pages service : `oklch(13% 0.048 240)` (plus sombre que brand-dark).
Tous les coins sont **carrés** (zéro `rounded-*`) — identité industrielle.

## À faire (non terminé)
- Pages `/mentions-legales` et `/politique-confidentialite` — liens dans Footer pointent dessus mais pages n'existent pas
- Plugin `@tailwindcss/typography` non installé — le `prose` dans `blog/[slug]/page.tsx` ne sera pas stylé sans lui
- Webhook `/api/revalidate` pour le blog (revalidation on-demand depuis WordPress)
