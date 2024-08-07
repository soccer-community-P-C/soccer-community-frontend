'use client';

import { useState } from 'react';
import { getTodayDate } from '@/utils/date-helper';
import Loading from '@/app/(league)/loading';
import { useGetGameListByLeagueGameIdYearMonth } from '@/api/league-game';
import { PREMIER_LEAGUE_ID } from '@/constants/league-game-id';
import { GameListService } from '@/components/league-game/service/game-list';
import { Calendar, LeagueGameContentList, TeamList } from '@/components/league-game';

const todayDate = getTodayDate();

const gameListService = new GameListService();

export default function LeagueGame() {
  const [selectedTeamId, setSelectedTeamId] = useState(20);
  const [selectedYearMonthDate, setSelectedYearMonthDate] = useState(todayDate);

  const {
    isPending: gameListIsPending,
    data: gameList,
    error: gameListError,
  } = useGetGameListByLeagueGameIdYearMonth({
    leagueId: PREMIER_LEAGUE_ID,
    // yearMonth: shortISOYearMonth(selectedYearMonthDate),

    yearMonth: '2024-05',
  });

  // const {
  //   isPending: gameListByLeagueTeamIdIsPending,
  //   data: gameListByLeagueTeamId,
  //   error: gameListByLeagueTeamIdError,
  // } = useGetGameListByTeamId({ leagueTeamId: 1 });

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
            {gameListIsPending ? <Loading /> : null}
            {gameListError ? <div>Error</div> : null}
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
