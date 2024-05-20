/**
 * 박스형태의 컨텐츠를 담을 Box 컴포넌트
 * 특징 : 흰색 배경, shadow 효과
 */
import { ReactNode } from 'react';

type BoxProps = {
  children: ReactNode;
  isSub?: boolean;
};

export default function Box({ children, isSub = false }: BoxProps) {
  return (
    <div
      className={`flex w-full flex-col rounded border border-gray-200 bg-white shadow ${isSub ? 'gap-4 p-4' : 'gap-6 p-6'}`}
    >
      {children}
    </div>
  );
}
