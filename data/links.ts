import { PageLink, SearchLink } from '@/types/types';

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
  },
];

/** 各ページへのリンク */
export const searchLink: SearchLink = {
  alt: '検索',
  href: '/search',
};
