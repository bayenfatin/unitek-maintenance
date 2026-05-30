export interface WPImage {
  sourceUrl: string;
  altText: string;
  mediaDetails?: {
    width: number;
    height: number;
  };
}

export interface WPAuthor {
  node: {
    name: string;
    slug: string;
    avatar?: {
      url: string;
    };
  };
}

export interface WPCategory {
  name: string;
  slug: string;
}

export interface WPTag {
  name: string;
  slug: string;
}

export interface RankMathOpenGraph {
  title: string;
  description: string;
  url: string;
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
  };
}

export interface RankMathSeo {
  title: string;
  description: string;
  canonicalUrl: string;
  openGraph: RankMathOpenGraph;
}

export interface WPPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  modified: string;
  author: WPAuthor;
  featuredImage?: {
    node: WPImage;
  };
  categories: {
    nodes: WPCategory[];
  };
  tags: {
    nodes: WPTag[];
  };
  seo?: RankMathSeo;
}

export interface WPPostListItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: WPAuthor;
  featuredImage?: {
    node: WPImage;
  };
}

export interface GraphQLResponse<T> {
  data: T;
  errors?: Array<{ message: string }>;
}
