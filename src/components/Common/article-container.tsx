import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ArticleContainerProps = {
  children: ReactNode;
  className?: string;
};
export default function ArticleContainer({ children, className }: ArticleContainerProps) {
  return <article className={twMerge('mt-4', className)}>{children}</article>;
}
