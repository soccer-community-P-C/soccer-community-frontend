import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { commonLinkList, linkList } from '@/components/main-header/link-list-util';
import { MobileModalNavProps } from '@/components/main-header/mobile-modal-nav';

export default function MobileModalNavLinkList({ onCloseModal }: MobileModalNavProps) {
  const pathname = usePathname();

  return (
    <nav className="relative">
      <ul className="mt-8">
        {commonLinkList.map((commonLink) => {
          return (
            <li key={commonLink.href}>
              <Link
                className={twMerge(
                  `group mb-4 flex items-center font-semibold text-slate-600 transition-colors hover:text-black lg:text-sm lg:leading-6`,
                  'dark:text-slate-300 dark:hover:text-white',
                  pathname === commonLink.href
                    ? 'text-black hover:text-black dark:text-white'
                    : null,
                )}
                href={commonLink.href}
                onClick={onCloseModal}
              >
                {commonLink.name}
              </Link>
            </li>
          );
        })}
        {linkList.map((link) => {
          if (link.subLinkList.length <= 0) {
            return null;
          }

          return (
            <li key={link.href}>
              <h5 className="mb-6 mt-8 font-semibold text-slate-900 dark:text-slate-200">
                {link.name}
              </h5>
              <ul className="space-y-3 border-l border-slate-100 dark:border-slate-700">
                {link.subLinkList.map((subLink) => (
                  <li key={subLink.href}>
                    <Link
                      className={twMerge(
                        '-ml-px block border-l border-transparent pl-4 text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-50',
                        pathname === subLink.href
                          ? 'border-slate-400 text-slate-900 hover:text-slate-900 dark:text-slate-50'
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
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
