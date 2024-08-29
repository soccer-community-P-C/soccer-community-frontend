import { IconCaretDownFilled, IconCaretUpFilled } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavSubLinkList from '@/components/main-header/nav-sub-link-list';
import { TLink } from '@/components/main-header/link-list-util';
import { cn } from '@/utils/cn';

type NavLinkItemProps = { link: TLink };

export default function NavLinkItem({ link }: NavLinkItemProps) {
  const isSamePath = usePathname().split('/')[1] === link.href.split('/')[1];

  return (
    <div className="group flex h-full items-center text-slate-300 hover:text-white">
      <Link className="flex cursor-pointer" href={link.href}>
        <div className={cn('font-bold', isSamePath && 'text-white hover:text-white')}>
          {link.name}
        </div>
        {link.subLinkList.length > 0 ? (
          <>
            <IconCaretDownFilled className="group-hover:hidden" />
            <IconCaretUpFilled className="hidden group-hover:block" />
          </>
        ) : null}
      </Link>
      {link.subLinkList.length > 0 ? <NavSubLinkList link={link} /> : null}
    </div>
  );
}
