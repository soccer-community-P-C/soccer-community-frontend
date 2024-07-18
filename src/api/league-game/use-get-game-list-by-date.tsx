import { useQuery } from '@tanstack/react-query';
import { getGameListByDate } from '@/api/league-game/league-games';

const QUERY_KEY = 'leagueGameByDate';

export function getQueryKey(targetDate: string) {
  return [QUERY_KEY, targetDate];
}

export default function useGetGameListByDate(targetDate: string) {
  return useQuery({
    queryKey: getQueryKey(targetDate),
    queryFn: () => getGameListByDate(targetDate),
  });
}
