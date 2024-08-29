'use client';

import { IconBallFootball, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import NavLinkList from '@/components/main-header/nav-link-list';
import { useAuth } from '@/contexts/auth-context';

export default function MainNav() {
  const { isAuthenticated, logout } = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <div className="sm-block h-full">
      <div className="container mx-auto flex h-full items-center justify-between px-4 text-white">
        <div className="flex h-full items-center gap-8">
          <Link className="flex items-center gap-2" href="/">
            <IconBallFootball size={36} />
            <span className="text-xl font-extrabold">커뮤니티</span>
          </Link>

          <nav className="block h-[74px]">
            <ul className="flex h-full items-center space-x-8">
              <NavLinkList />
            </ul>
          </nav>
        </div>

        <div className="ml-auto hover:text-amber-200">
          {isAuthenticated ? (
            <button className="py-2" onClick={handleLogout} type="button">
              로그아웃
            </button>
          ) : (
            <Link className="flex gap-2" href="/login">
              <IconUser stroke={2} />
              <span>로그인</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
