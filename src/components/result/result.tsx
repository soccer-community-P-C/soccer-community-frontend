'use client';

import { useState } from 'react';
import Box from '@/components/Common/box';
import DatePicker from '@/components/result/date-picker';
import ResultOfGame from '@/components/result/result-of-game';
import BoxHeading from '@/components/Common/box-heading';
import { addDays, getFiveDays, getTodayDate, shortISO } from '@/utils/date-helper';

const todayDate = getTodayDate();

export default function Result() {
  const [standardDay, setStandardDay] = useState(todayDate);
  const [selectedDay, setSelectedDay] = useState(() => shortISO(todayDate));
  const dayList = getFiveDays(standardDay);

  function handleSelectDay(day: string) {
    setSelectedDay(day);
  }

  function handleMoveDay(daysToAdd: number) {
    const movedDay = addDays(standardDay, daysToAdd);

    setStandardDay(movedDay);

    if (daysToAdd > 0) {
      // 오른쪽 화살표 입력 => 첫번째 날짜 선택
      setSelectedDay(shortISO(addDays(movedDay, -2)));
    } else {
      // 왼쪽 화살표 입력 => 마지막 날짜 선택
      setSelectedDay(shortISO(addDays(movedDay, 2)));
    }
  }

  return (
    <Box>
      <BoxHeading hTagType="h2">프리미어리그 일정 및 결과</BoxHeading>
      <DatePicker
        dayList={dayList}
        onMoveDay={handleMoveDay}
        onSelectDay={handleSelectDay}
        selectedDay={selectedDay}
      />
      <ResultOfGame selectedDay={selectedDay} />
    </Box>
  );
}
