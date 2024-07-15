import { useQuery } from '@tanstack/react-query';
import { getLeagueGameByYearMonth } from '@/api/league-game/league-games';

const QUERY_KEY = 'leagueGameByDate';

export function getQueryKey(leagueId: number, yearMonth: string) {
  return [QUERY_KEY, leagueId, yearMonth];
}

export default function useGetLeagueGameByYearMonth(leagueId: number, yearMonth: string) {
  return useQuery({
    queryKey: getQueryKey(leagueId, yearMonth),
    queryFn: () => getLeagueGameByYearMonth(leagueId, yearMonth),
  });
}
