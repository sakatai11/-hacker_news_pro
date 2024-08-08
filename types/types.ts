export type sourceType = {
  id : string;
  name : string;
};

export type articleType =  {
  source: sourceType;
  author: string;
  title: string;
  description?: string;
  url: string;
  urlToImage? : string;
  publishedAt : string;
  content: string | null;
};

export type listType = {
  status: string;
  totalResults: null;
  article: articleType[];
};