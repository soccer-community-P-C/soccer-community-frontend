import { useQuery } from '@tanstack/react-query';
import { getGameByLeagueGameId } from '@/api/league-game/league-games';

const QUERY_KEY = 'leagueGameByLeagueGameId';

export function getQueryKey(leagueGameId: number) {
  return [QUERY_KEY, leagueGameId];
}

export default function useGetGameByLeagueGameId(leagueGameId: number) {
  return useQuery({
    queryKey: getQueryKey(leagueGameId),
    queryFn: () => getGameByLeagueGameId(leagueGameId),
  });
}
