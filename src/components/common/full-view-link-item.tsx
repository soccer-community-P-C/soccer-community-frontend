import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import type { UrlObject } from 'url';

type FullViewLinkItemProps = {
  href: string | UrlObject;
};

export default function FullViewLinkItem({ href }: FullViewLinkItemProps) {
  return (
    <Link
      className="inline-flex cursor-pointer text-black/80 transition-colors hover:text-black/50 hover:underline"
      href={href}
    >
      <span>전체보기</span>
      <IconChevronRight />
    </Link>
  );
}
