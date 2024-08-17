import { useQuery } from '@tanstack/react-query';
import { getGameByLeagueGameId } from '@/api/league-game/league-games';
import { GetGameByLeagueGameIdProps } from '@/api/league-game/league-games-types';

const QUERY_KEY = 'leagueGameByLeagueGameId';

function getQueryKey({ leagueGameId }: GetGameByLeagueGameIdProps) {
  return [QUERY_KEY, leagueGameId];
}

export function useGetGameByLeagueGameId({ leagueGameId }: GetGameByLeagueGameIdProps) {
  return useQuery({
    queryKey: getQueryKey({ leagueGameId }),
    queryFn: () => getGameByLeagueGameId({ leagueGameId }),
  });
}
