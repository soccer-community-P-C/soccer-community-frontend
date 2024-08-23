// 현재 시즌을 관리하는 훅
// 8월 기준으로 시즌을 관리
// ex) 2024-08-24에는 "24"시즌으로 반환
// 초기값은 오늘 날짜 기준 시즌

import { useState } from 'react';
import { getTodayDate } from '@/utils/date-helper';

function getSeason() {
  // 8월을 기준으로 잡음(명확한 기준은 아님)
  const todayDate = getTodayDate();
  const standardDate = new Date(`${todayDate.getFullYear()}-'08`);

  if (todayDate < standardDate) {
    return todayDate.getFullYear() - 1;
  }

  return todayDate.getFullYear();
}

export default function useLeagueSeason() {
  const [season, setSeason] = useState(() => +getSeason().toString().slice(2));

  return { season, setSeason };
}
