'use client';

import { IconShirtSport } from '@tabler/icons-react';
import { getDateTitle, shortISOTimeHourMinute } from '@/utils/date-helper';
import Box from '@/components/common/box';
import GoalInfo from '@/components/match/goal-Info';

type MatchHeaderProps = {
  home: string;
  away: string;
  date: string;
  awayScore: string;
  homeScore: string;
};

export default function MatchHeader({ home, away, date, awayScore, homeScore }: MatchHeaderProps) {
  // Todo: 추가 필요 데이터 - 로고, 골 기록
  return (
    <header>
      <Box className="gap-2 overflow-hidden bg-gray-600 px-0 pb-0 pt-0 text-white sm:gap-6">
        <header className="bg-gray-800 p-2 sm:px-6">
          <div className="flex flex-col justify-between text-xs text-gray-200 sm:flex-row sm:text-base">
            <strong>프리미어리그 26R</strong>
            <div className="flex gap-4">
              <dl>
                {date ? getDateTitle(new Date(date)) : null} {shortISOTimeHourMinute(date)}
              </dl>
              <span className="sm-block">|</span>
              <dl className="ml-auto">스탬포트 브릿지</dl>
            </div>
          </div>
        </header>
        <section className="flex flex-col items-center justify-center gap-2 ">
          <div className="flex h-14 w-full items-center justify-center gap-2 text-base font-semibold sm:gap-6 sm:text-xl md:text-2xl lg:text-4xl">
            <div className="sm-block flex-[0.5_0.5_25%] text-right font-semibold hover:text-gray-200">
              {home}
            </div>
            <IconShirtSport size={60} stroke={2} />
            <div className="mx-0 min-w-16 text-center">{`${homeScore} - ${awayScore}`}</div>
            <IconShirtSport size={60} stroke={2} />
            <div className="sm-block flex-[0.5_0.5_25%] font-semibold hover:text-gray-200">
              {away}
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 border-t border-[#777784] p-2 text-xs sm:py-4 lg:text-base">
          <div className="flex flex-col flex-wrap items-center justify-start gap-y-1 lg:flex-row lg:justify-end lg:gap-x-8 lg:gap-y-4 lg:pr-16">
            <GoalInfo goalTimeList={[31, 70, 70, 70, 70]} player="라임 스털링" />
            <GoalInfo goalTimeList={[31, 70]} player="라임 스털링" />
            <GoalInfo goalTimeList={[31, 70]} player="라임 스털링" />
            <GoalInfo goalTimeList={[31, 70]} player="라임 스털링" />
          </div>

          <div className="flex flex-col flex-wrap items-center gap-y-1 lg:flex-row lg:gap-x-8 lg:gap-y-4 lg:pl-16">
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
