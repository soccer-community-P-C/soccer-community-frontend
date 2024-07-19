import { ReactNode } from 'react';

export default function TableContainer({
  children,
  isMatch = false,
}: {
  children: ReactNode;
  isMatch?: boolean;
}) {
  return (
    <div
      className="scrollbar-hidden overflow-hidden overflow-y-auto rounded-md border border-[#777784]"
      // style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
    >
      <div className={`${isMatch ? 'container' : 'w-full'} text-center`}>
        <div className="relative bg-[#f7f7f9]">
          <div className="overflow-auto border-b border-t bg-white">{children}</div>
        </div>
      </div>
    </div>
  );
}
