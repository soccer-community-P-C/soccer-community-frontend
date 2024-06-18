'use client';

import { useSearchParams } from 'next/navigation';
import { IconShirtSport } from '@tabler/icons-react';
import Link from 'next/link';
import { getDateTitle } from '@/utils/date-helper';
import Box from '@/components/common/box';
import GoalInfo from '@/components/match/goal-Info';

export default function MatchHeader() {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get('date');
  const teamList = searchParams.get('team')?.split('-');

  const [home, away] = teamList as string[];

  return (
    <header>
      <Box className="overflow-hidden bg-gray-600 px-0 pb-0 pt-0 text-white">
        <header className="bg-gray-800 p-2 px-6">
          <div className="flex justify-between text-gray-200">
            <strong>프리미어리그 26R</strong>
            <div className="flex gap-4">
              <dl>{dateParam ? getDateTitle(new Date(dateParam)) : null} 04:00</dl>|
              <dl>스탬포트 브릿지</dl>
            </div>
          </div>
        </header>
        <section className="flex flex-col items-center justify-center gap-2 ">
          <div className="flex h-14 w-full items-center justify-center gap-6 text-5xl font-semibold">
            <Link
              className="flex-[0.5_0.5_25%] text-right font-semibold hover:text-gray-200"
              href="/premier/team/첼시"
            >
              {home}
            </Link>
            <IconShirtSport size={60} stroke={2} />
            <div className="mx-8 min-w-16 text-center text-4xl">2 - 5</div>
            <IconShirtSport size={60} stroke={2} />
            <Link
              className="flex-[0.5_0.5_25%] font-semibold hover:text-gray-200"
              href="/premier/team/첼시"
            >
              {away}
            </Link>
          </div>
        </section>
        <section className="grid grid-cols-2 border-t border-[#777784] py-4">
          <div className="flex flex-wrap justify-end gap-x-8 gap-y-4 pr-16">
            <GoalInfo goalTimeList={[31, 70]} player="라임 스털링" />
            <GoalInfo goalTimeList={[31, 70]} player="라임 스털링" />
            <GoalInfo goalTimeList={[31, 70]} player="라임 스털링" />
            <GoalInfo goalTimeList={[31, 70]} player="라임 스털링" />
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 pl-16">
            <GoalInfo away={true} goalTimeList={[31, 70]} player="라임 스털링" />
            <GoalInfo away={true} goalTimeList={[31, 70]} player="라임 스털링" />
            <GoalInfo away={true} goalTimeList={[31, 70]} player="라임 스털링" />
            <GoalInfo away={true} goalTimeList={[31, 70]} player="라임 스털링" />
            <GoalInfo away={true} goalTimeList={[31, 70]} player="라임 스털링" />
            <GoalInfo away={true} goalTimeList={[31, 70]} player="라임 스털링" />
          </div>
        </section>
      </Box>
    </header>
  );
}
