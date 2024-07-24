import NavLinkItem from '@/components/main-header/nav-link-item';

export type TLink = {
  name: string;
  href: string;
  subLinkList: { subName: string; href: string }[];
};

const linkList: TLink[] = [
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
        href: '/premier/league-game',
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
        href: '/laliga/league-game',
      },
      {
        subName: '순위',
        href: '/laliga/rank',
      },
    ],
  },
];

export default function NavLinkList() {
  return (
    <>
      {linkList.map((link, index) => (
        <NavLinkItem key={index} link={link} />
      ))}
    </>
  );
}
