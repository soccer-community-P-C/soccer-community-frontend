import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type LinkItemProps = {
  children: ReactNode;
  className?: string;
} & LinkProps;

export default function LinkItem({ children, className = '', ...otherProps }: LinkItemProps) {
  return (
    <Link
      className={twMerge('text-xl transition hover:text-slate-500 hover:underline', className)}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
