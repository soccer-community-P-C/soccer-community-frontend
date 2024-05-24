'use client';

import Link from 'next/link';
import { IconUser } from '@tabler/icons-react';

import { IconBallFootball } from '@tabler/icons-react';
import NavLinkList from '@/components/main-header/nav-link-list';

export default function MainHeader() {
  return (
    <div className="sticky top-0 z-40 h-[60px] w-full bg-gray-600 duration-500">
      <header className="mx-auto flex h-full w-4/5 items-center justify-start px-4 text-white ">
        <Link className="mr-8 flex items-center gap-2" href="/">
          <IconBallFootball size={36} />
          <span className="text-xl font-extrabold">커뮤니티</span>
        </Link>

        <nav className="h-[74px]">
          <ul className="flex h-full items-center space-x-8">
            <NavLinkList />
          </ul>
        </nav>

        <div className="ml-auto hover:text-amber-200">
          <Link className="flex gap-2" href="/login">
            <IconUser stroke={2} />
            <span>로그인</span>
          </Link>
        </div>
      </header>
    </div>
  );
}
