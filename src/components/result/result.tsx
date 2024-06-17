'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from '@/components/result/date-picker';
import ResultOfGame from '@/components/result/result-of-game';
import { addDays, getFiveDate, getTodayDate } from '@/utils/date-helper';

const todayDate = getTodayDate();

export default function Result() {
  const [standardDate, setStandardDate] = useState(todayDate);
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const dateList = getFiveDate(standardDate);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/leagueGame/date/2024-02-01');

      const data = await response.data;

      console.log(data);
    }

    fetchData();
  }, []);

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
