import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/wpgraphql";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | Unitek Automation",
  description:
    "Actualités, guides techniques et conseils d'experts en maintenance CNC, rétrofit industriel et automatisation.",
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

export default async function BlogPage() {
  const posts = await getAllPosts(12);

  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      {/* Hero */}
      <section className="bg-[var(--color-brand-dark)] pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-brand-light)] mb-3">
            Ressources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-[var(--font-space)]">
            Blog technique
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Maintenance CNC, rétrofit, Industrie 4.0 — les experts Unitek partagent leur savoir-faire.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-[var(--color-muted)] text-lg">
            Aucun article publié pour le moment.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-[var(--color-brand-light)] overflow-hidden">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[var(--color-brand)] opacity-30 text-6xl font-bold select-none">
                        U
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <time
                    dateTime={post.date}
                    className="text-xs text-[var(--color-muted)] font-medium"
                  >
                    {formatDate(post.date)}
                  </time>

                  <h2 className="text-base font-bold leading-snug text-[var(--color-foreground)] group-hover:text-[var(--color-brand)] transition-colors line-clamp-2 font-[var(--font-space)]">
                    {post.title}
                  </h2>

                  <p className="text-sm text-[var(--color-muted)] line-clamp-3 flex-1">
                    {stripHtml(post.excerpt)}
                  </p>

                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-[var(--color-muted)]">
                      {post.author.node.name}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-semibold text-[var(--color-brand)] hover:text-[var(--color-brand-dark)] transition-colors"
                    >
                      Lire l&apos;article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
