import { useQuery } from '@tanstack/react-query';
import { getGameListByLeagueIdYearMonth } from '@/api/league-game/league-games';
import { GetGameListByLeagueGameIdYearMonthProps } from '@/api/league-game/league-games-types';

const QUERY_KEY = 'leagueGameListByLeagueGameIdYearMonth';

function getQueryKey({ leagueId, yearMonth }: GetGameListByLeagueGameIdYearMonthProps) {
  return [QUERY_KEY, leagueId, yearMonth];
}

export function useGetGameListByLeagueGameIdYearMonth({
  leagueId,
  yearMonth,
}: GetGameListByLeagueGameIdYearMonthProps) {
  return useQuery({
    queryKey: getQueryKey({ leagueId, yearMonth }),
    queryFn: () => getGameListByLeagueIdYearMonth({ leagueId, yearMonth }),
  });
}
