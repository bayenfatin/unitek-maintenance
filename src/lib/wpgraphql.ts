import type {
  GraphQLResponse,
  WPPost,
  WPPostListItem,
} from "@/types/blog";

const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL;

if (!WP_GRAPHQL_URL) {
  throw new Error("NEXT_PUBLIC_WP_GRAPHQL_URL is not defined in environment variables");
}

async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const res = await fetch(WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`WPGraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const json: GraphQLResponse<T> = await res.json();

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join(", "));
  }

  return json.data;
}

// ─── Queries ──────────────────────────────────────────────────────────────────

const GET_POSTS = `
  query GetPosts($first: Int = 12) {
    posts(first: $first, where: { status: PUBLISH }) {
      nodes {
        slug
        title
        excerpt
        date
        author {
          node {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
`;

const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      content
      excerpt
      date
      modified
      author {
        node {
          name
          slug
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
      seo {
        title
        description
        canonicalUrl
        openGraph {
          title
          description
          url
          ogImage {
            url
            width
            height
          }
        }
      }
    }
  }
`;

const GET_ALL_SLUGS = `
  query GetAllSlugs($first: Int = 100) {
    posts(first: $first, where: { status: PUBLISH }) {
      nodes {
        slug
      }
    }
  }
`;

// ─── Public helpers ───────────────────────────────────────────────────────────

export async function getAllPosts(first = 12): Promise<WPPostListItem[]> {
  const data = await fetchGraphQL<{ posts: { nodes: WPPostListItem[] } }>(
    GET_POSTS,
    { first }
  );
  return data.posts.nodes;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const data = await fetchGraphQL<{ post: WPPost | null }>(
      GET_POST_BY_SLUG,
      { slug }
    );
    return data.post ?? null;
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const data = await fetchGraphQL<{ posts: { nodes: Array<{ slug: string }> } }>(
    GET_ALL_SLUGS,
    { first: 100 }
  );
  return data.posts.nodes.map((n) => n.slug);
}
