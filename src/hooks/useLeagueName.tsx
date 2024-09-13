import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useGetLeague } from '@/api/league/use-get-league';

export default function useLeagueName() {
  const pathname = usePathname();
  return pathname.split('/')[1];
}

export const leagueIdNameMapper = {
  premier: 'PL',
  laliga: 'LALIGA',
  league1: 'LEAGUE1',
  bundesliga: 'BUNDESLIGA',
} as const;

export function useLeagueInfo({
  season,
  competition,
}: {
  season: string;
  competition?: 'PL' | 'LALIGA' | 'LEAGUE1' | 'BUNDESLIGA';
}) {
  let competitionName = leagueIdNameMapper[useLeagueName() as keyof typeof leagueIdNameMapper];
  if (competition) {
    competitionName = competition;
  }

  const { data } = useGetLeague({ season, competition: competitionName });
  const [leagueId, setLeagueId] = useState(99);
  const [leagueName, setLeagueName] = useState('PL');

  useEffect(() => {
    if (!data) {
      return;
    }

    const { leagueId, leagueName } = data[0];
    setLeagueId(leagueId);
    setLeagueName(leagueName);
    return;
  }, [data]);

  return { leagueId, leagueName };
}
