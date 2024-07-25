import { useQuery } from '@tanstack/react-query';
import { getGameListByLeagueIdYearMonth } from '@/api/league-game/league-games';

const QUERY_KEY = 'gameListByLeagueGameIdYearMonth';

export function getQueryKey(leagueId: number, yearMonth: string) {
  return [QUERY_KEY, leagueId, yearMonth];
}

export default function useGetGameListByLeagueGameIdYearMonth(leagueId: number, yearMonth: string) {
  return useQuery({
    queryKey: getQueryKey(leagueId, yearMonth),
    queryFn: () => getGameListByLeagueIdYearMonth(leagueId, yearMonth),
  });
}
