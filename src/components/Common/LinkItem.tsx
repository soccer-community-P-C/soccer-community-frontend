import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type LinkItemProps = {
  children: ReactNode;
  addClassName?: string;
} & LinkProps;

export default function LinkItem({ children, addClassName = '', ...otherProps }: LinkItemProps) {
  return (
    <Link
      className={twMerge('text-xl transition hover:text-slate-500 hover:underline', addClassName)}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
