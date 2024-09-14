'use client';

import BoxHeading from '@/components/common/box-heading';
import ViewAllLinkItem from '@/components/common/view-all-link-item';
import { useGetGameListByDate } from '@/api/league-game';
import { getTodayDate, shortISO } from '@/utils/date-helper';
import { LoadingBox } from '@/components/common/loading-spinner';
import ScheduleContent from '@/components/schedule/schedule-content';

const todayDate = shortISO(getTodayDate());

export default function PremierSchedule() {
  // Todo: api 에러
  const { isPending, data: gameList, error } = useGetGameListByDate({ targetDate: todayDate });

  return (
    <div className="flex w-full flex-col">
      <div className="mb-6 flex items-center justify-between">
        <BoxHeading hTagType="h3">프리미어리그 경기 일정</BoxHeading>
        <ViewAllLinkItem href="/premier/schedule" />
      </div>
      {isPending ? <LoadingBox isHome={true} /> : null}
      {error ? <div>Error</div> : null}
      {gameList ? <ScheduleContent date={todayDate} gameList={gameList} isHome={true} /> : null}
    </div>
  );
}
