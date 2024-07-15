import { useQuery } from '@tanstack/react-query';
import { getLeagueGameByLeagueGameId } from '@/api/league-game/league-games';

const QUERY_KEY = 'leagueGameByDate';

export function getQueryKey(leagueGameId: number) {
  return [QUERY_KEY, leagueGameId];
}

export default function useGetLeagueGameByLeagueGameId(leagueGameId: number) {
  return useQuery({
    queryKey: getQueryKey(leagueGameId),
    queryFn: () => getLeagueGameByLeagueGameId(leagueGameId),
  });
}
