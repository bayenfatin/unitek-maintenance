import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/wpgraphql";

export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ─── Metadata (Rank Math SEO) ─────────────────────────────────────────────────

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Article introuvable" };

  const parentImages = (await parent).openGraph?.images ?? [];
  const ogImage = post.seo?.openGraph?.ogImage?.url;

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || stripHtml(post.excerpt),
    alternates: {
      canonical: post.seo?.canonicalUrl,
    },
    openGraph: {
      title: post.seo?.openGraph?.title || post.title,
      description: post.seo?.openGraph?.description || stripHtml(post.excerpt),
      url: post.seo?.openGraph?.url ?? post.seo?.canonicalUrl,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author.node.name],
      images: ogImage ? [ogImage, ...parentImages] : parentImages,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.title || post.title,
      description: post.seo?.description || stripHtml(post.excerpt),
      images: ogImage ? [ogImage] : [],
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
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://unitek-automation.fr";
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl =
    post.featuredImage?.node.sourceUrl ??
    post.seo?.openGraph?.ogImage?.url;

  // Schema.org Article JSON-LD
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
      url: `${siteUrl}/author/${post.author.node.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Unitek Automation",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
        width: post.featuredImage?.node.mediaDetails?.width ?? 1200,
        height: post.featuredImage?.node.mediaDetails?.height ?? 630,
      },
    }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen bg-[var(--color-surface)]">
        {/* Hero / Featured Image */}
        <div className="relative bg-[var(--color-brand-dark)]">
          {imageUrl && (
            <div className="absolute inset-0 opacity-20">
              <Image
                src={imageUrl}
                alt={post.featuredImage?.node.altText || post.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          )}
          <div className="relative max-w-3xl mx-auto px-6 pt-28 pb-20 text-center">
            {/* Categories */}
            {post.categories.nodes.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {post.categories.nodes.map((cat) => (
                  <span
                    key={cat.slug}
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white/80"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-space)] leading-tight">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center justify-center gap-4 text-white/60 text-sm">
              <span>{post.author.node.name}</span>
              <span>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.modified !== post.date && (
                <>
                  <span>·</span>
                  <span>Mis à jour le {formatDate(post.modified)}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-6 py-14">
          <div
            className="prose prose-slate max-w-none
              prose-headings:font-[var(--font-space)] prose-headings:text-[var(--color-foreground)]
              prose-a:text-[var(--color-brand)] prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-sm
              prose-code:text-[var(--color-brand)] prose-code:bg-[var(--color-brand-light)] prose-code:px-1 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags.nodes.length > 0 && (
            <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-3">
                Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.nodes.map((tag) => (
                  <span
                    key={tag.slug}
                    className="text-xs px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)] hover:text-[var(--color-brand-dark)] transition-colors"
            >
              ← Retour au blog
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
