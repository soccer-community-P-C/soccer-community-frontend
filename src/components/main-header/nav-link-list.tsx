import NavLinkItem from '@/components/main-header/nav-link-item';

export type TLinkList = {
  name: string;
  href: string;
  subLinkList: { subName: string; href: string }[];
};

const linkList = [
  {
    name: '프리미어리그',
    href: '/premier',
    subLinkList: [
      {
        subName: '게시판',
        href: '/premier',
      },
      {
        subName: '일정 및 결과',
        href: '/premier/result',
      },
      {
        subName: '순위',
        href: '/premier/rank',
      },
    ],
  },
  {
    name: '라리가',
    href: '/laliga',
    subLinkList: [
      {
        subName: '게시판',
        href: '/laliga',
      },
      {
        subName: '일정 및 결과',
        href: '/laliga/result',
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
