import Link from 'next/link';

const linkList = [
  {
    name: '프리미어리그',
    isSubMenu: true,
    subLinks: [
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
    isSubMenu: true,
    subLinks: [
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
      {linkList.map((link) => (
        <div className="group flex h-full items-center" key={link.name}>
          <h1 className="cursor-pointer">{link.name}</h1>
          {link.isSubMenu ? (
            <div className="absolute top-14 hidden hover:block group-hover:block">
              {/*<div className="h-full py-3">*/}
              {/*  <div className="absolute left-3 mt-1 h-4 w-4 rotate-45 bg-black" />*/}
              {/*</div>*/}
              <div className="flex flex-col gap-2 bg-black p-3.5">
                {link.subLinks.map((subLink, index) => (
                  <li key={index}>
                    <Link className="hover:text-amber-50" href={subLink.link}>
                      {subLink.subName}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}
