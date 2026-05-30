import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { MOCK_POSTS, MOCK_CARD_META } from "@/lib/mock-posts";

export const metadata: Metadata = {
  title: "Actualités Industrielles | Unitek Automation",
  description:
    "Retours terrain, guides techniques et études de cas en maintenance industrielle, hydraulique, rétrofit IHM et AMDEC.",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

// ─── Card principal ────────────────────────────────────────────────────────────

function ArticleCard({
  post,
  meta,
}: {
  post: (typeof MOCK_POSTS)[number];
  meta: (typeof MOCK_CARD_META)[number];
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className="relative overflow-hidden h-[340px] flex flex-col justify-end"
        style={{ background: meta.gradient }}
      >
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 28px,oklch(100% 0 0 / 0.03) 28px,oklch(100% 0 0 / 0.03) 29px),repeating-linear-gradient(90deg,transparent,transparent 28px,oklch(100% 0 0 / 0.03) 28px,oklch(100% 0 0 / 0.03) 29px)",
          }}
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 text-foreground">
            {meta.category}
          </span>
        </div>

        {/* Bottom gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, oklch(5% 0.02 240 / 0.92) 0%, oklch(5% 0.02 240 / 0.5) 45%, transparent 75%)",
          }}
        />

        {/* Text content */}
        <div className="relative z-10 p-5">
          <h2
            className="text-base font-bold text-white leading-snug mb-2 line-clamp-2 group-hover:opacity-90 transition-opacity"
            style={{ fontFamily: "var(--font-space, system-ui, sans-serif)" }}
          >
            {post.title}
          </h2>
          <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
            {stripHtml(post.excerpt)}
          </p>
        </div>
      </article>
    </Link>
  );
}

// ─── Item sidebar ──────────────────────────────────────────────────────────────

function SidebarItem({
  post,
  meta,
}: {
  post: (typeof MOCK_POSTS)[number];
  meta: (typeof MOCK_CARD_META)[number];
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex gap-3 items-start">
      {/* Thumbnail */}
      <div
        className="w-[72px] h-[72px] shrink-0"
        style={{ background: meta.gradient }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted mb-1">{formatDate(post.date)}</p>
        <p
          className="text-sm font-bold leading-snug line-clamp-3 text-foreground group-hover:text-brand transition-colors"
          style={{ fontFamily: "var(--font-space, system-ui, sans-serif)" }}
        >
          {post.title}
        </p>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ActualitesPage() {
  return (
    <main className="min-h-screen bg-surface">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-white pt-32 pb-16 px-6 text-center border-b border-border">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase px-4 py-1.5 border border-border text-muted mb-6">
            Actualités Industrielles
          </span>

          <h1
            className="text-[clamp(2rem,5vw,3.4rem)] font-bold leading-tight mb-5 text-foreground"
            style={{ fontFamily: "var(--font-space, system-ui, sans-serif)", letterSpacing: "-0.03em" }}
          >
            Retours terrain &amp; guides techniques
          </h1>

          <p className="text-base text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            Maintenance hydraulique, AMDEC, rétrofit IHM — les techniciens
            Unitek partagent leurs méthodes et leurs résultats concrets.
          </p>

          {/* Barre de recherche décorative */}
          <div className="flex max-w-md mx-auto shadow-sm">
            <div className="flex-1 flex items-center gap-2 border border-r-0 border-border bg-white px-4">
              <Search size={15} className="text-muted shrink-0" />
              <input
                type="search"
                placeholder="Rechercher un article..."
                className="flex-1 text-sm text-foreground placeholder:text-muted outline-none py-3 bg-transparent"
                readOnly
              />
            </div>
            <button
              className="px-6 py-3 text-sm font-semibold text-white bg-brand hover:bg-brand-dark transition-colors duration-150 whitespace-nowrap"
            >
              Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* ── Contenu + Sidebar ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

        <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-14 xl:gap-20">

          {/* ── Grille principale ──────────────────────────────────────────── */}
          <div>
            <h2
              className="text-xl font-bold text-foreground mb-8"
              style={{ fontFamily: "var(--font-space, system-ui, sans-serif)", letterSpacing: "-0.02em" }}
            >
              Les dernières actualités
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {MOCK_POSTS.map((post, i) => (
                <ArticleCard key={post.slug} post={post} meta={MOCK_CARD_META[i]} />
              ))}
            </div>

            {/* Pagination placeholder */}
            <div className="mt-12 flex justify-center">
              <span className="text-xs text-muted border border-border px-4 py-2">
                3 articles — prochains articles disponibles à la connexion WordPress
              </span>
            </div>
          </div>

          {/* ── Sidebar ───────────────────────────────────────────────────── */}
          <aside className="mt-14 lg:mt-0">

            {/* À la une */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <h3
                  className="text-base font-bold text-foreground"
                  style={{ fontFamily: "var(--font-space, system-ui, sans-serif)" }}
                >
                  À la une
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="space-y-5">
                {MOCK_POSTS.map((post, i) => (
                  <SidebarItem key={post.slug} post={post} meta={MOCK_CARD_META[i]} />
                ))}
              </div>
            </div>

            {/* Récentes */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <h3
                  className="text-base font-bold text-foreground"
                  style={{ fontFamily: "var(--font-space, system-ui, sans-serif)" }}
                >
                  Récentes
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="space-y-5">
                {[...MOCK_POSTS].reverse().map((post, i) => (
                  <SidebarItem
                    key={post.slug}
                    post={post}
                    meta={MOCK_CARD_META[MOCK_POSTS.length - 1 - i]}
                  />
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>

    </main>
  );
}
