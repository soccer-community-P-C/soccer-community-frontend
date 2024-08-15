import { IconX } from '@tabler/icons-react';
import Link from 'next/link';

type NavModalProps = {
  onCloseModal: () => void;
};

export default function NavModal({ onCloseModal }: NavModalProps) {
  return (
    <div
      // className="fixed left-0 top-0 z-10 h-[calc(100vh+12rem)] w-full bg-black/20 backdrop-blur-sm"
      className="fixed inset-0 z-50"
      // onClick={(event) => {
      //   if (event.target && event.target === modalBackground.current) {
      //   setModalOpen(false);
      // }
      // }}
      // ref={modalBackground}
    >
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
        onClick={onCloseModal}
      />
      <div className="relative h-screen w-80 max-w-[calc(100%-3rem)] bg-white p-6 text-black">
        <button
          className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          onClick={onCloseModal}
          type="button"
        >
          <IconX />
        </button>
        <nav className="relative">
          <h5 className="mb-8 mt-12 font-semibold text-slate-900 dark:text-slate-200">
            리그 카테고리
          </h5>
          <ul className="space-y-6 border-l border-slate-100 dark:border-slate-700">
            <li>
              <Link
                className="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
                href="/premier/board"
                onClick={onCloseModal}
              >
                프리미어리그
              </Link>
            </li>
            <li>
              <Link
                className="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
                href="/laliga/board"
                onClick={onCloseModal}
              >
                라리가
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
