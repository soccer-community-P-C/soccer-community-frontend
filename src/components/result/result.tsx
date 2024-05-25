'use client';

import { useState } from 'react';
import DatePicker from '@/components/result/date-picker';
import ResultOfGame from '@/components/result/result-of-game';
import { addDate, getFiveDate, getTodayDate } from '@/utils/date-helper';

const todayDate = getTodayDate();

export default function Result() {
  const [standardDate, setStandardDate] = useState(todayDate);
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const dateList = getFiveDate(standardDate);

  function handleSelectDate(date: Date) {
    setSelectedDate(date);
  }

  function handleMoveDate(daysToAdd: number) {
    const movedDay = addDate(standardDate, daysToAdd);

    setStandardDate(movedDay);

    if (daysToAdd > 0) {
      // 오른쪽 화살표 입력 => 첫번째 날짜 선택
      setSelectedDate(addDate(movedDay, -2));
    } else {
      // 왼쪽 화살표 입력 => 마지막 날짜 선택
      setSelectedDate(addDate(movedDay, 2));
    }
  }

  return (
    <>
      <DatePicker
        dateList={dateList}
        onMoveDate={handleMoveDate}
        onSelectDate={handleSelectDate}
        selectedDate={selectedDate}
      />
      <ResultOfGame selectedDate={selectedDate} />
    </>
  );
}
