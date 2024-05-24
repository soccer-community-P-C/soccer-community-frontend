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

export default function BoxHeading({ hTagType = 'h1', children }: BoxHeadingProps) {
  const Component = hTagType;

  let size = 'text-4xl';

  if (hTagType === 'h2') {
    size = 'text-3xl';
  } else if (hTagType === 'h3') {
    size = 'text-2xl';
  }

  return (
    <Component className={twMerge('font-semibold leading-none text-gray-600', size)}>
      {children}
    </Component>
  );
}
