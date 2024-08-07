type PageLink = {
  name: string;
  href: string;
};

/** 各ページへのリンク */
export const pageLinks: PageLink[] = [
  {
    name: 'Top',
    href: '/',
  },
  {
    name: 'Sports',
    href: '/sports',
  },
  {
    name: 'Technology',
    href: '/technology',
  }
];
