'use client';

import { useSearchParams } from 'next/navigation';
import { IconShirtSport } from '@tabler/icons-react';
import Link from 'next/link';
import { getDateTitle } from '@/utils/date-helper';
import Box from '@/components/common/box';

export default function Match() {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get('date');

  return (
    <div className="flex flex-col gap-4">
      <header>
        <Box>
          <section className="flex flex-col items-center justify-center gap-2">
            <div>프리미어리그</div>
            <p className="text-xs">{dateParam ? getDateTitle(new Date(dateParam)) : null}</p>
            <div className="flex h-14 w-full items-center justify-center gap-6 text-5xl font-semibold">
              <Link
                className="flex-[0.5_0.5_25%] text-right font-bold hover:text-gray-600"
                href="/premier/team/첼시"
              >
                첼시
              </Link>
              <IconShirtSport size={60} stroke={2} />
              <div className="mx-8 min-w-16 text-center text-4xl">2 - 5</div>
              <IconShirtSport size={60} stroke={2} />
              <Link
                className="flex-[0.5_0.5_25%] font-bold hover:text-gray-600"
                href="/premier/team/첼시"
              >
                본머스
              </Link>
            </div>
          </section>
          <section className="grid grid-cols-2 border-b border-t border-[#777784] py-4">
            <div className="flex flex-wrap justify-end gap-x-8 gap-y-4 pr-40">
              <span>라임 스털링 31&apos; 70&apos;</span>
              <span>리스 제임스 32&apos;</span>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 pl-40">
              <span>본머스 선수 53&apos;</span>
              <span>본머스 선수 53&apos;</span>
              <span>본머스 선수 53&apos;</span>
              <span>본머스 선수 53&apos;</span>
              <span>본머스 선수 53&apos;</span>
            </div>
          </section>
        </Box>
      </header>

      <div className="flex gap-2">
        <Box className="w-full">주요내용</Box>
        <aside className="flex w-[640px] flex-col gap-2">
          <Box>세부정보</Box>
          <Box>투표</Box>
        </aside>
      </div>
      {/*<Box>*/}
      {/*  <RankTable />*/}
      {/*</Box>*/}
    </div>
  );
}
