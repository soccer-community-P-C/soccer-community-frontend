export type TLink = {
  name: string;
  href: string;
  subLinkList: { subName: string; href: string }[];
};

export const commonLinkList: Omit<TLink, 'subLinkList'>[] = [
  { name: '홈', href: '/' },
  { name: '게시판', href: '/post' },
];

export const linkList: TLink[] = [
  { name: '게시판', href: '/post', subLinkList: [] },
  {
    name: '프리미어리그',
    href: '/premier/schedule',
    subLinkList: [
      {
        subName: '일정 및 결과',
        href: '/premier/schedule',
      },
      {
        subName: '팀 순위',
        href: '/premier/rank',
      },
      {
        subName: '선수 순위',
        href: '/premier/player-rank',
      },
    ],
  },
  // {
  //   name: '라리가',
  //   href: '/laliga/schedule',
  //   subLinkList: [
  //     {
  //       subName: '일정 및 결과',
  //       href: '/laliga/schedule',
  //     },
  //     {
  //       subName: '팀 순위',
  //       href: '/laliga/rank',
  //     },
  //     {
  //       subName: '선수 순위',
  //       href: '/laliga/player-rank',
  //     },
  //   ],
  // },
];
