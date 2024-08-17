import { IconCaretDownFilled, IconCaretUpFilled } from '@tabler/icons-react';
import Link from 'next/link';
import NavSubLinkList from '@/components/main-header/nav-sub-link-list';
import { TLink } from '@/components/main-header/nav-link-list';

type NavLinkItemProps = { link: TLink };

export default function NavLinkItem({ link }: NavLinkItemProps) {
  return (
    <div className="group flex h-full items-center text-slate-300 hover:text-white">
      <Link className="flex cursor-pointer" href={link.href}>
        <div className="font-bold">{link.name}</div>
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
