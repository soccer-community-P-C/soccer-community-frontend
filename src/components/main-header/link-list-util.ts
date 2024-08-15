import { TLink } from '@/components/main-header/nav-link-list';

export const linkList: TLink[] = [
  {
    name: '프리미어리그',
    href: '/premier/board',
    subLinkList: [
      {
        subName: '게시판',
        href: '/premier/board',
      },
      {
        subName: '일정 및 결과',
        href: '/premier/schedule',
      },
      {
        subName: '순위',
        href: '/premier/rank',
      },
    ],
  },
  {
    name: '라리가',
    href: '/laliga/board',
    subLinkList: [
      {
        subName: '게시판',
        href: '/laliga/board',
      },
      {
        subName: '일정 및 결과',
        href: '/laliga/schedule',
      },
      {
        subName: '순위',
        href: '/laliga/rank',
      },
    ],
  },
];
