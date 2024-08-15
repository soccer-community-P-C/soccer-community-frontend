import { IconX } from '@tabler/icons-react';
import ModalNavLinkList from '@/components/main-header/modal-nav-link-list';

export type NavModalProps = {
  onCloseModal: () => void;
};

export default function ModalNav({ onCloseModal }: NavModalProps) {
  return (
    <div className="fixed inset-0 z-50">
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
        <ModalNavLinkList onCloseModal={onCloseModal} />
      </div>
    </div>
  );
}
