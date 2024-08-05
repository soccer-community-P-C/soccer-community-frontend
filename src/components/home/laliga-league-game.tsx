'use client';

import BoxHeading from '@/components/common/box-heading';
import ViewAllLinkItem from '@/components/common/view-all-link-item';
import LeagueGameContent from '@/components/league-game/league-game-content';
import { useGetGameListByDate } from '@/api/league-game';
import { getTodayDate, shortISO } from '@/utils/date-helper';
import { LoadingBox } from '@/components/common/loading-spinner';

const todayDate = shortISO(getTodayDate());

export default function LaligaLeagueGame() {
  const { isPending, data: gameList, error } = useGetGameListByDate({ targetDate: todayDate });

  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-white">
      <div className="flex-all-center flex justify-between">
        <BoxHeading hTagType="h4">라리가 경기 일정</BoxHeading>
        <ViewAllLinkItem href="/premier/league-game" />
      </div>
      {isPending ? <LoadingBox isHome={true} /> : null}
      {error ? <div>Error</div> : null}
      {gameList ? <LeagueGameContent date={todayDate} gameList={gameList} isHome={true} /> : null}
    </div>
  );
}
