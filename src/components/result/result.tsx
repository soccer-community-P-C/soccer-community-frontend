'use client';

import { useState } from 'react';
import DatePicker from '@/components/result/date-picker';
import ResultOfGame from '@/components/result/result-of-game';
import { addDays, getFiveDate, shortISO } from '@/utils/date-helper';
import Loading from '@/app/(league)/loading';
import { useGetLeagueGameByDate } from '@/api/league-game';

// const todayDate = getTodayDate();

export default function Result() {
  // const [standardDate, setStandardDate] = useState(todayDate);
  // const [selectedDate, setSelectedDate] = useState(todayDate);
  // 임시로 "2024-02-01" 지정
  const [standardDate, setStandardDate] = useState(new Date('2024-02-01'));
  const [selectedDate, setSelectedDate] = useState(new Date('2024-02-01'));
  const dateList = getFiveDate(standardDate);

  const { isPending, data: gameList, error } = useGetLeagueGameByDate(shortISO(selectedDate));

  function handleSelectDate(date: Date) {
    setSelectedDate(date);
  }

  function handleMoveDate(daysToAdd: number) {
    const movedDay = addDays(standardDate, daysToAdd);

    setStandardDate(movedDay);

    if (daysToAdd > 0) {
      // 오른쪽 화살표 입력 => 첫번째 날짜 선택
      setSelectedDate(addDays(movedDay, -2));
    } else {
      // 왼쪽 화살표 입력 => 마지막 날짜 선택
      setSelectedDate(addDays(movedDay, 2));
    }
  }

  console.log(gameList);

  return (
    <>
      <DatePicker
        dateList={dateList}
        onMoveDate={handleMoveDate}
        onSelectDate={handleSelectDate}
        selectedDate={selectedDate}
      />
      {isPending ? <Loading /> : null}
      {error ? <div>Error</div> : null}
      {gameList?.responses ? (
        <ResultOfGame gameList={gameList?.responses} selectedDate={selectedDate} />
      ) : null}
    </>
  );
}
