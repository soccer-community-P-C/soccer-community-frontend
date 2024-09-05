import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import type { UrlObject } from 'url';

type FullViewLinkItemProps = {
  href: string | UrlObject;
};

export default function ViewAllLinkItem({ href }: FullViewLinkItemProps) {
  return (
    <Link
      className="inline-flex cursor-pointer text-card-foreground transition-colors hover:text-black/50 hover:underline dark:hover:text-white/50"
      href={href}
    >
      <span className="md-block">전체보기</span>
      <IconChevronRight />
    </Link>
  );
}
