'use client';

import { IconAlignLeft, IconBallFootball, IconUser } from '@tabler/icons-react';

import Link from 'next/link';
import { useState } from 'react';
import ModalNav from '@/components/main-header/modal-nav';
import { useAuth } from '@/contexts/auth-context';

export default function MobileNav() {
  const { isAuthenticated, logout } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleLogout() {
    logout();
  }

  return (
    <div className="relative flex h-full items-center justify-start px-4 text-white sm:hidden">
      {modalOpen ? <ModalNav onCloseModal={closeModal} /> : null}

      <button onClick={openModal} type="button">
        <IconAlignLeft className="mr-2" height={32} width={32} />
      </button>
      <Link className="mr-8 flex items-center gap-2" href="/">
        <IconBallFootball size={36} />
        <span className="text-xl font-extrabold">커뮤니티</span>
      </Link>

      <div className="ml-auto hover:text-amber-200">
        {isAuthenticated ? (
          <button className="py-2" onClick={handleLogout} type="button">
            로그아웃
          </button>
        ) : (
          <Link className="flex gap-2" href="/login">
            <IconUser height={32} stroke={2} width={32} />
          </Link>
        )}
      </div>
    </div>
  );
}
