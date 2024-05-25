import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionContainer({ children, className }: SectionContainerProps) {
  return <section className={twMerge('mx-auto w-4/5', className)}>{children}</section>;
}
