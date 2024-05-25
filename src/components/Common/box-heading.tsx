/**
 * Heading 종류에 따른 컴포넌트
 * h1 ~ h3
 */
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

type BoxHeadingProps = {
  hTagType?: 'h1' | 'h2' | 'h3';
  children: ReactNode;
};

const textSizes = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
};

export default function BoxHeading({ hTagType = 'h1', children }: BoxHeadingProps) {
  const Component = hTagType;

  return (
    <Component className={twMerge('font-semibold leading-none text-gray-600', textSizes[hTagType])}>
      {children}
    </Component>
  );
}
