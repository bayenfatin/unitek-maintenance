import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_POSTS_FULL, MOCK_CARD_META, MOCK_POSTS } from "@/lib/mock-posts";

type Props = {
  params: Promise<{ slug: string }>;
};

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return MOCK_POSTS_FULL.map((post) => ({ slug: post.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = MOCK_POSTS_FULL.find((p) => p.slug === slug);

  if (!post) return { title: "Article introuvable" };

  const parentImages = (await parent).openGraph?.images ?? [];

  return {
    title: post.seo?.title ?? post.title,
    description: post.seo?.description ?? stripHtml(post.excerpt),
    alternates: {
      canonical: post.seo?.canonicalUrl,
    },
    openGraph: {
      title: post.seo?.openGraph?.title ?? post.title,
      description: post.seo?.openGraph?.description ?? stripHtml(post.excerpt),
      url: post.seo?.openGraph?.url ?? post.seo?.canonicalUrl,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author.node.name],
      images: parentImages,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.title ?? post.title,
      description: post.seo?.description ?? stripHtml(post.excerpt),
    },
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = MOCK_POSTS_FULL.find((p) => p.slug === slug);

  if (!post) notFound();

  const cardIdx = MOCK_POSTS.findIndex((p) => p.slug === slug);
  const meta = MOCK_CARD_META[cardIdx] ?? MOCK_CARD_META[0];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://unitek-automation.fr";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: stripHtml(post.excerpt),
    datePublished: post.date,
    dateModified: post.modified,
    url: postUrl,
    author: {
      "@type": "Person",
      name: post.author.node.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Unitek Automation",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/unitek-logo-bleu.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen bg-surface">

        {/* ── Hero ───────────────────────────────────────────────────────────── */}
        <div
          className="relative pt-32 pb-20 px-6 overflow-hidden"
          style={{ background: meta.gradient }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 28px,oklch(100% 0 0 / 0.03) 28px,oklch(100% 0 0 / 0.03) 29px),repeating-linear-gradient(90deg,transparent,transparent 28px,oklch(100% 0 0 / 0.03) 28px,oklch(100% 0 0 / 0.03) 29px)",
            }}
          />

          <div className="relative max-w-3xl mx-auto text-center">
            {/* Categories */}
            {post.categories.nodes.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {post.categories.nodes.map((cat) => (
                  <span
                    key={cat.slug}
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1 bg-white/15 text-white/90"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            )}

            <h1
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
              style={{
                fontFamily: "var(--font-space, system-ui, sans-serif)",
                letterSpacing: "-0.025em",
              }}
            >
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-3 text-white/60 text-sm flex-wrap">
              <span>{post.author.node.name}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.modified !== post.date && (
                <>
                  <span aria-hidden>·</span>
                  <span>Mis à jour le {formatDate(post.modified)}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Corps de l'article ─────────────────────────────────────────────── */}
        <article className="max-w-3xl mx-auto px-6 py-14">

          <div
            className="
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4
              [&>h2]:text-foreground
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-3
              [&>h3]:text-foreground
              [&>p]:text-base [&>p]:leading-[1.8] [&>p]:text-muted [&>p]:mb-5
              [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6
              [&>ul>li]:text-muted [&>ul>li]:leading-[1.8] [&>ul>li]:mb-2
              [&>strong]:text-foreground
              [&>a]:text-brand [&>a]:underline
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags.nodes.length > 0 && (
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-3">
                Thèmes
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.nodes.map((tag) => (
                  <span
                    key={tag.slug}
                    className="text-xs px-3 py-1 border border-border text-muted"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Navigation retour */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              ← Retour aux actualités
            </Link>
          </div>
        </article>

      </main>
    </>
  );
}
