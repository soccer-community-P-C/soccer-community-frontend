/**
 * Heading 종류에 따른 컴포넌트
 * h1 ~ h3
 */
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

type BoxHeadingProps = {
  hTagType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: ReactNode;
  className?: string;
};

const textSizes = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-lg',
};

export default function BoxHeading({ hTagType = 'h1', children, className = '' }: BoxHeadingProps) {
  const Component = hTagType;

  return (
    <Component
      className={twMerge(
        'font-semibold leading-none text-gray-600',
        textSizes[hTagType],
        className,
      )}
    >
      {children}
    </Component>
  );
}
