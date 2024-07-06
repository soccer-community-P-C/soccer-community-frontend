import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: SectionContainerProps) {
  return (
    <section className={twMerge('container relative mx-auto flex flex-col gap-4', className)}>
      {children}
    </section>
  );
}
