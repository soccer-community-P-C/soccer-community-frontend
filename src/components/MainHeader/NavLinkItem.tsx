import { IconCaretDownFilled, IconCaretUpFilled } from '@tabler/icons-react';
import Link from 'next/link';
import NavSubLinkList from '@/components/MainHeader/NavSubLinkList';
import { TLinkList } from '@/components/MainHeader/NavLinkList';

type NavLinkItemProps = { link: TLinkList };

export default function NavLinkItem({ link }: NavLinkItemProps) {
  return (
    <div className="group flex h-full items-center text-slate-300 hover:text-white">
      <Link className="flex cursor-pointer" href={link.href}>
        <h1 className="font-bold">{link.name}</h1>
        <IconCaretDownFilled className="group-hover:hidden" />
        <IconCaretUpFilled className="hidden group-hover:block" />
      </Link>
      {link.subLinkList.length > 0 ? <NavSubLinkList linkInfo={link} /> : null}
    </div>
  );
}
