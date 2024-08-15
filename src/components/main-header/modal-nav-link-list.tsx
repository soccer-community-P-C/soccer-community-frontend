import Link from 'next/link';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { linkList } from '@/components/main-header/link-list-util';
import { NavModalProps } from '@/components/main-header/modal-nav';

export default function ModalNavLinkList({ onCloseModal }: NavModalProps) {
  const pathname = usePathname();

  return (
    <nav className="relative">
      {linkList.map((link) => {
        return (
          <Fragment key={link.href}>
            <h5 className="mb-6 mt-12 font-semibold text-slate-900 dark:text-slate-200">
              {link.name}
            </h5>
            <ul className="space-y-3.5 border-l border-slate-100 dark:border-slate-700">
              {link.subLinkList.map((subLink) => (
                <li key={subLink.href}>
                  <Link
                    className={twMerge(
                      '-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300',
                      pathname === subLink.href
                        ? 'border-slate-400 text-sky-400 hover:text-sky-400'
                        : null,
                    )}
                    href={subLink.href}
                    onClick={onCloseModal}
                  >
                    {subLink.subName}
                  </Link>
                </li>
              ))}
            </ul>
          </Fragment>
        );
      })}
    </nav>
  );
}
