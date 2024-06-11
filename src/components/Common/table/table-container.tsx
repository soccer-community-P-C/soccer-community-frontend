import { ReactNode } from 'react';

export default function TableContainer({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-md border border-[#777784] shadow">
      <div className="w-full text-center">
        <div className="relative bg-[#f7f7f9]">
          <div className="overflow-auto border-b border-t bg-white">{children}</div>
        </div>
      </div>
    </div>
  );
}
