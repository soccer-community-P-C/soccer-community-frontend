/**
 * 박스형태의 컨텐츠를 담을 Box 컴포넌트
 * 특징 : 흰색 배경, shadow 효과
 */
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type BoxProps = {
  children: ReactNode;
  isSub?: boolean;
  className?: string;
};

export default function Box({ children, isSub = false, className = '' }: BoxProps) {
  return (
    <div
      className={twMerge(
        `flex w-full flex-col rounded-lg border border-gray-200 bg-white shadow ${isSub ? 'gap-4 p-4' : 'gap-6 p-6'}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
