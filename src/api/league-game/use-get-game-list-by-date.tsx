import { useQuery } from '@tanstack/react-query';
import { getGameListByDate } from '@/api/league-game/league-games';
import { GetGameListByDateProps } from '@/api/league-game/league-games-types';

const QUERY_KEY = 'leagueGameByDate';

function getQueryKey({ targetDate, leagueId }: GetGameListByDateProps) {
  return [QUERY_KEY, targetDate, leagueId];
}

export function useGetGameListByDate({ targetDate, leagueId }: GetGameListByDateProps) {
  return useQuery({
    queryKey: getQueryKey({ targetDate, leagueId }),
    queryFn: () => getGameListByDate({ targetDate, leagueId }),
  });
}
