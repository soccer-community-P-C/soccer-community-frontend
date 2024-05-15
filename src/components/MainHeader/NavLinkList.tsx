import NavLinkItem from '@/components/MainHeader/NavLinkItem';

export type TLinkList = {
  name: string;
  subLinkList: { subName: string; link: string }[];
};

const linkList = [
  {
    name: '프리미어리그',
    subLinkList: [
      {
        subName: '게시판',
        link: '/premier',
      },
      {
        subName: '일정 및 결과',
        link: '/premier/result',
      },
      {
        subName: '순위',
        link: '/premier/rank',
      },
    ],
  },
  {
    name: '라리가',
    subLinkList: [
      {
        subName: '게시판',
        link: '/laliga',
      },
      {
        subName: '일정 및 결과',
        link: '/laliga/result',
      },
      {
        subName: '순위',
        link: '/laliga/rank',
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
