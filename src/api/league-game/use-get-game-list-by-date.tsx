import { useQuery } from '@tanstack/react-query';
import { getGameListByDate } from '@/api/league-game/league-games';
import { GetGameListByDateProps } from '@/api/league-game/league-games-types';

const QUERY_KEY = 'leagueGameByDate';

function getQueryKey({ targetDate }: GetGameListByDateProps) {
  return [QUERY_KEY, targetDate];
}

export function useGetGameListByDate({ targetDate }: GetGameListByDateProps) {
  return useQuery({
    queryKey: getQueryKey({ targetDate }),
    queryFn: () => getGameListByDate({ targetDate }),
  });
}
