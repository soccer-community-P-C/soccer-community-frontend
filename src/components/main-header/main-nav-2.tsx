'use client';

import { IconAlignLeft, IconBallFootball, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';
import NavLinkList from '@/components/main-header/nav-link-list';
import ProfileDropdown from '@/components/main-header/profile-dropdown';
import { useAuth } from '@/contexts/auth-context';
import MobileModalNav from '@/components/main-header/mobile-modal-nav';

export default function MainNav2() {
  const { isAuthenticated, logout } = useAuth();
  const [mobileModalOpen, setMobileModalOpen] = useState(false);

  function openModal() {
    setMobileModalOpen(true);
  }

  function closeModal() {
    setMobileModalOpen(false);
  }

  return (
    <div className="relative mx-auto flex h-full items-center justify-between px-4 text-white sm:container">
      {mobileModalOpen ? <MobileModalNav onCloseModal={closeModal} /> : null}

      <div className="flex h-full items-center sm:gap-4">
        <button className="sm:hidden" onClick={openModal} type="button">
          <IconAlignLeft className="mr-2" height={32} width={32} />
        </button>
        <Link className="flex items-center gap-2 sm:mr-8" href="/">
          <IconBallFootball size={36} />
          <span className="text-xl font-extrabold">커뮤니티</span>
        </Link>

        <nav className="sm-block h-[74px]">
          <ul className="flex h-full items-center space-x-8">
            <NavLinkList />
          </ul>
        </nav>
      </div>

      <div className="ml-auto text-gray-200 hover:text-white">
        {isAuthenticated ? (
          <ProfileDropdown logout={logout} />
        ) : (
          <Link className="flex gap-2" href="/login">
            <span>로그인</span>
          </Link>
        )}
      </div>
    </div>
  );
}
