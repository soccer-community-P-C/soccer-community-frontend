'use client';

import { useState } from 'react';
import { getTodayDate, shortISOYearMonth } from '@/utils/date-helper';
import { useGetGameListByLeagueGameIdYearMonth } from '@/api/league-game';
import { PREMIER_LEAGUE_ID } from '@/constants/league-game-id';
import { GameListService } from '@/components/schedule/service/game-list';
import { LoadingBox } from '@/components/common/loading-spinner';
import Calendar from '@/components/schedule/calendar';
import TeamList from '@/components/schedule/team-list';
import ScheduleContentList from '@/components/schedule/schedule-content-list';
import { useGetGameListByTeamIdYearMonth } from '@/api/league-game/use-get-game-list-by-team-year-month';
import { ENTIRE_TEAM_ID } from '@/components/schedule/team-list.const';

const todayDate = getTodayDate();

const gameListService = new GameListService();
const gameListByTeamIdService = new GameListService();

function resetGameList() {
  gameListService.resetGameList();
  gameListByTeamIdService.resetGameList();
}

function isEntireTeamId(teamId: number) {
  // 팀 리스트에서 전체 선택 했는지 여부 확인

  return teamId === ENTIRE_TEAM_ID;
}

export default function Schedule() {
  const [selectedTeamId, setSelectedTeamId] = useState(ENTIRE_TEAM_ID);
  const [selectedYearMonthDate, setSelectedYearMonthDate] = useState(todayDate);

  const {
    isPending: isPendingGameList,
    data: gameList,
    error: errorGameList,
  } = useGetGameListByLeagueGameIdYearMonth({
    leagueId: PREMIER_LEAGUE_ID,
    yearMonth: shortISOYearMonth(selectedYearMonthDate),
  });

  const {
    isPending: isPendingGameListByTeamId,
    data: gameListByTeamId,
    error: errorGameListByTeamId,
  } = useGetGameListByTeamIdYearMonth({
    leagueTeamId: selectedTeamId,
    yearMonth: shortISOYearMonth(selectedYearMonthDate),
  });

  if (!gameListByTeamIdService.hasGameList() && gameListByTeamId) {
    gameListByTeamIdService.setGameList(gameListByTeamId);
  }

  if (!gameListService.hasGameList() && gameList) {
    gameListService.setGameList(gameList);
  }

  function handleSelectYearMonth(date: Date) {
    setSelectedYearMonthDate(date);
    resetGameList();
  }

  function handleSelectTeamId(teamId: number) {
    setSelectedTeamId(teamId);
    resetGameList();
  }

  return (
    <>
      <Calendar
        onSelectedYearMonthDate={handleSelectYearMonth}
        selectedYearMonthDate={selectedYearMonthDate}
      />
      <TeamList onSelectedTeamId={handleSelectTeamId} selectedTeamId={selectedTeamId} />
      {isEntireTeamId(selectedTeamId) ? (
        <>
          {isPendingGameList ? <LoadingBox /> : null}
          {errorGameList ? <div>Error</div> : null}
          {gameListService.hasGameList() ? (
            <ScheduleContentList monthlyGameList={gameListService.sortedMonthlyGameList} />
          ) : null}
        </>
      ) : (
        <>
          {isPendingGameListByTeamId ? <LoadingBox /> : null}
          {errorGameListByTeamId ? <div>Error</div> : null}
          {gameListByTeamIdService.hasGameList() ? (
            <ScheduleContentList monthlyGameList={gameListByTeamIdService.sortedMonthlyGameList} />
          ) : null}
        </>
      )}
    </>
  );
}
