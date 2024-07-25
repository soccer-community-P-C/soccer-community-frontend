'use client';

import { useState } from 'react';
import { getTodayDate, shortISOYearMonth } from '@/utils/date-helper';
import Loading from '@/app/(league)/loading';
import { useGetGameListByLeagueGameIdYearMonth } from '@/api/league-game';
import Calendar from '@/components/league-game/calendar';
import { GameListService } from '@/components/league-game/service/game-list';
import LeagueGameContentList from '@/components/league-game/league-game-content-list';
import { PREMIER_LEAGUE_ID } from '@/constants/league-game-id';

const todayDate = getTodayDate();

const gameListService = new GameListService();

export default function LeagueGame() {
  const [selectedYearMonthDate, setSelectedYearMonthDate] = useState(todayDate);

  const { isPending, data, error } = useGetGameListByLeagueGameIdYearMonth(
    PREMIER_LEAGUE_ID,
    shortISOYearMonth(selectedYearMonthDate),
  );

  if (!gameListService.hasGameList() && data) {
    gameListService.setGameList(data);
  }

  function handleSelectYearMonth(date: Date) {
    setSelectedYearMonthDate(date);
    gameListService.resetGameList();
  }

  // function handleSelectDate(date: Date) {
  //   setSelectedDate(date);
  // }
  //
  // function handleMoveDate(daysToAdd: number) {
  //   const movedDay = addDays(standardDate, daysToAdd);
  //
  //   setStandardDate(movedDay);
  //
  //   if (daysToAdd > 0) {
  //     // 오른쪽 화살표 입력 => 첫번째 날짜 선택
  //     setSelectedDate(addDays(movedDay, -2));
  //   } else {
  //     // 왼쪽 화살표 입력 => 마지막 날짜 선택
  //     setSelectedDate(addDays(movedDay, 2));
  //   }
  // }

  return (
    <>
      <Calendar
        onSelectedYearMonthDate={handleSelectYearMonth}
        selectedYearMonthDate={selectedYearMonthDate}
      />
      {/*<DatePicker*/}
      {/*  dateList={gameListService.dateList}*/}
      {/*  onMoveDate={handleMoveDate}*/}
      {/*  onSelectDate={handleSelectDate}*/}
      {/*  selectedDate={selectedDate}*/}
      {/*/>*/}
      {isPending ? <Loading /> : null}
      {error ? <div>Error</div> : null}
      {gameListService.hasGameList() ? (
        <LeagueGameContentList monthlyGameList={gameListService.sortedMonthlyGameList} />
      ) : null}
    </>
  );
}
