'use client';

import { IconBallFootball, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';
import NavLinkList from '@/components/main-header/nav-link-list';
import ProfileDropdown from '@/components/main-header/profile-dropdown';
import { useAuth } from '@/contexts/auth-context';

export default function MainNav() {
  const { isAuthenticated, logout } = useAuth();

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

        <div>
          {isAuthenticated ? (
            <ProfileDropdown logout={logout} />
          ) : (
            <Link className="flex gap-2" href="/login">
              <IconUser />
              <span>로그인</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
