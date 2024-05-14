'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavLinkList from '@/components/MainHeader/NavLinkList';
import soccerImg from '@/assets/img/soccerball.png';

export default function MainHeader() {
  return (
    // <div className="sticky top-0 z-40 h-[60px] w-full border-b-4 border-amber-300 bg-black duration-500">
    <div className="sticky top-0 z-40 h-[60px] w-full border-b-4 border-amber-300 bg-black duration-500">
      <header className="mx-auto flex h-full w-[var(--max-content-width)] items-center justify-start px-4 text-white ">
        <Link className="mr-8" href="/">
          <Image alt="logo" height={28} src={soccerImg} width={28} />
        </Link>

        <nav className="h-[74px] text-slate-300">
          <ul className="flex h-full items-center space-x-8">
            <NavLinkList />
          </ul>
        </nav>

        <div className="ml-auto text-amber-200">
          <Link href="/login">로그인</Link>
        </div>
      </header>
    </div>
  );
  // return (
  //   <div className="sticky top-0 z-40 h-16 w-full bg-black duration-500">
  //     <header className="mx-auto flex h-full w-[var(--max-content-width)] items-center justify-start px-4 text-white ">
  //       <Link className="mr-8" href="/">
  //         로고
  //       </Link>
  //
  //       <nav className="h-full text-slate-300">
  //         <ul className="flex h-full cursor-pointer items-center space-x-8">
  //           <li className="hover:text-slate-500" onMouseOver={handleMouseOver}>
  //             프리미어리그
  //           </li>
  //           <li className="hover:text-slate-500">라리가</li>
  //           <li className="hover:text-slate-500">게시판</li>
  //         </ul>
  //       </nav>
  //
  //       <div className="ml-auto text-amber-200">
  //         <Link href="/login">로그인</Link>
  //         <Link href="/login">Test</Link>
  //       </div>
  //     </header>
  //     <div className="z-50 mx-auto h-[52px]  w-[var(--max-content-width)] bg-orange-300 px-4">
  //       <ul className="flex h-full items-center gap-6">
  //         <li>
  //           <Link href="/premierLeague">게시판</Link>
  //         </li>
  //         <li>
  //           <Link href="/premierLeague/result">일정 및 결과</Link>
  //         </li>
  //         <li>
  //           <Link href="/premierLeague/rank">순위</Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // );
}
