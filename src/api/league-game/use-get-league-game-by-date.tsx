import { useQuery } from '@tanstack/react-query';
import { getLeagueGameByDate } from '@/api/league-game/league-games';
import { TLeagueGameByDate } from '@/types/league-game-types';

const QUERY_KEY = 'leagueGameByDate';

export function getQueryKey(targetDate: string) {
  return [QUERY_KEY, targetDate];
}

export default function useGetLeagueGameByDate(targetDate: string) {
  return useQuery<TLeagueGameByDate, Error>({
    queryKey: getQueryKey(targetDate),
    queryFn: () => getLeagueGameByDate(targetDate),
  });
}
