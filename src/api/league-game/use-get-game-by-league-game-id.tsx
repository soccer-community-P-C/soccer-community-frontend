import { useQuery } from '@tanstack/react-query';
import { getGameByLeagueGameId } from '@/api/league-game/league-games';

const QUERY_KEY = 'leagueGameByLeagueGameId';

export type GetGameByLeagueGameIdProps = {
  leagueGameId: string | number;
};

function getQueryKey({ leagueGameId }: GetGameByLeagueGameIdProps) {
  return [QUERY_KEY, leagueGameId];
}

export function useGetGameByLeagueGameId({ leagueGameId }: GetGameByLeagueGameIdProps) {
  return useQuery({
    queryKey: getQueryKey({ leagueGameId }),
    queryFn: () => getGameByLeagueGameId({ leagueGameId }),
  });
}
