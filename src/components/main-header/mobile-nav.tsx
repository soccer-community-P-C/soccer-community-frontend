'use client';

import { IconAlignLeft, IconBallFootball, IconUser } from '@tabler/icons-react';

import Link from 'next/link';
import { useState } from 'react';
import ModalNav from '@/components/main-header/modal-nav';

export default function MobileNav() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="relative flex h-full min-w-[300px] items-center justify-start px-4 text-white md:hidden">
      {modalOpen ? <ModalNav onCloseModal={closeModal} /> : null}

      <button onClick={openModal} type="button">
        <IconAlignLeft className="mr-2" height={32} width={32} />
      </button>
      <Link className="mr-8 flex items-center gap-2" href="/">
        <IconBallFootball size={36} />
        <span className="text-xl font-extrabold">커뮤니티</span>
      </Link>

      <div className="ml-auto hover:text-amber-200">
        <Link className="flex gap-2" href="/login">
          <IconUser height={32} stroke={2} width={32} />
        </Link>
      </div>
    </div>
  );
}
