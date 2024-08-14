export type SourceType = {
  id: string;
  name: string;
};

export type ArticleType = {
  source: SourceType;
  author: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string | null;
};

export type ListType = {
  status: string;
  totalResults: null;
  article: ArticleType[];
};

export type PageLink = {
  name: string;
  href: string;
};

export type SearchLink = {
  alt: string;
  href: string;
};
