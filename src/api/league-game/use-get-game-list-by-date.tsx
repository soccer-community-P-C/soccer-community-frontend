import { useQuery } from '@tanstack/react-query';
import { getGameListByDate } from '@/api/league-game/league-games';

const QUERY_KEY = 'leagueGameByDate';

export type GetGameListByDateProps = { targetDate: string };

function getQueryKey({ targetDate }: GetGameListByDateProps) {
  return [QUERY_KEY, targetDate];
}

export function useGetGameListByDate({ targetDate }: GetGameListByDateProps) {
  return useQuery({
    queryKey: getQueryKey({ targetDate }),
    queryFn: () => getGameListByDate({ targetDate }),
  });
}
