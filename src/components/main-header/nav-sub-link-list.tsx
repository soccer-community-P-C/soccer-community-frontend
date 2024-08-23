import Link from 'next/link';
import { TLink } from '@/components/main-header/link-list-util';

type NavSubLinkListProps = {
  link: TLink;
};

export default function NavSubLinkList({ link }: NavSubLinkListProps) {
  return (
    <nav className="absolute top-[62px] hidden bg-white py-2 shadow-md hover:block group-hover:block">
      <div className="flex flex-col gap-1 text-slate-500">
        <h2 className="text-md bg-gray-100 px-2 py-0.5">{link.name}</h2>
        {link.subLinkList.map((subLink, index) => (
          <Link href={subLink.href} key={index}>
            <li className="px-2 py-0.5 text-sm hover:bg-gray-300">{subLink.subName}</li>
          </Link>
        ))}
      </div>
    </nav>
  );
}
