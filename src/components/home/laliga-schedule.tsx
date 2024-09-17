'use client';

import BoxHeading from '@/components/common/box-heading';
import ViewAllLinkItem from '@/components/common/view-all-link-item';
import { useGetGameListByDate } from '@/api/league-game';
import { getTodayDate, shortISO } from '@/utils/date-helper';
import { LoadingBox } from '@/components/common/loading-spinner';
import ScheduleContent from '@/components/schedule/schedule-content';
import { useLeagueInfo } from '@/hooks/useLeagueName';

const todayDate = shortISO(getTodayDate());

export default function LaligaSchedule() {
  const { leagueId } = useLeagueInfo({ season: '2024', competition: 'LALIGA' });
  const {
    isPending,
    data: gameList,
    error,
  } = useGetGameListByDate({ targetDate: todayDate, leagueId });

  return (
    <div className="flex w-full flex-col">
      <div className="mb-6 flex items-center justify-between">
        <BoxHeading hTagType="h4">라리가 경기 일정</BoxHeading>
        <ViewAllLinkItem href="/laliga/schedule" />
      </div>
      {isPending ? <LoadingBox isHome={true} /> : null}
      {error ? <div>Error</div> : null}
      {gameList ? <ScheduleContent date={todayDate} gameList={gameList} isHome={true} /> : null}
    </div>
  );
}
