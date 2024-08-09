'use client';

import { useState } from 'react';
import { getTodayDate, shortISOYearMonth } from '@/utils/date-helper';
import { useGetGameListByLeagueGameIdYearMonth } from '@/api/league-game';
import { PREMIER_LEAGUE_ID } from '@/constants/league-game-id';
import { GameListService } from '@/components/league-game/service/game-list';
import { Calendar, LeagueGameContentList, TeamList } from '@/components/league-game';
import { LoadingBox } from '@/components/common/loading-spinner';

const todayDate = getTodayDate();

const gameListService = new GameListService();

export default function LeagueGame() {
  const [selectedTeamId, setSelectedTeamId] = useState(20);
  const [selectedYearMonthDate, setSelectedYearMonthDate] = useState(todayDate);

  const {
    isPending: isPendingGameList,
    data: gameList,
    error: errorGameList,
  } = useGetGameListByLeagueGameIdYearMonth({
    leagueId: PREMIER_LEAGUE_ID,
    yearMonth: shortISOYearMonth(selectedYearMonthDate),
  });

  if (!gameListService.hasGameList() && gameList) {
    gameListService.setGameList(gameList);
  }

  function handleSelectYearMonth(date: Date) {
    setSelectedYearMonthDate(date);
    gameListService.resetGameList();
  }

  function handleSelectTeamId(teamId: number) {
    setSelectedTeamId(teamId);
  }

  return (
    <>
      <Calendar
        onSelectedYearMonthDate={handleSelectYearMonth}
        selectedYearMonthDate={selectedYearMonthDate}
      />
      <TeamList onSelectedTeamId={handleSelectTeamId} selectedTeamId={selectedTeamId} />
      {
        selectedTeamId === 20 ? (
          <>
            {isPendingGameList ? <LoadingBox /> : null}
            {errorGameList ? <div>Error</div> : null}
            {gameListService.hasGameList() ? (
              <LeagueGameContentList monthlyGameList={gameListService.sortedMonthlyGameList} />
            ) : null}
          </>
        ) : null
        // Todo: 팀 월별 경기 일정 조회 api 필요
        // <>
        //   {gameListByLeagueTeamIdIsPending ? <Loading /> : null}
        //   {gameListByLeagueTeamIdError ? <div>Error</div>  : null}
        //   {gameListByLeagueTeamId ? (
        //     <LeagueGameContentList monthlyGameList={gameListByLeagueTeamId} />
        //   ) : null}
        // </>
      }
    </>
  );
}
