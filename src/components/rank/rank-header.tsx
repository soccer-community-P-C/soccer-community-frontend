import { useState } from 'react';
import BoxHeading from '@/components/common/box-heading';
import { getTodayDate, shortISOYear } from '@/utils/date-helper';
import useLeagueName from '@/hooks/useLeagueName';

export default function RankHeader() {
  const leagueName = leagueNameMapper[useLeagueName() as keyof typeof leagueNameMapper];
  const [season, setSeason] = useState(() => Number(getSeason().slice(2)));

  return (
    <BoxHeading hTagType="h2">
      {season}/{season + 1} {leagueName} 순위
    </BoxHeading>
  );
}

const leagueNameMapper = {
  premier: '프리미어리그',
  laliga: '라리가',
};

function getSeason() {
  const todayDate = getTodayDate();
  const standardDate = new Date(`${shortISOYear(todayDate)}-'08`);

  if (todayDate < standardDate) {
    const cloneDate = todayDate;

    cloneDate.setDate(cloneDate.getFullYear() - 1);

    return shortISOYear(cloneDate);
  }

  return shortISOYear(todayDate);
}
