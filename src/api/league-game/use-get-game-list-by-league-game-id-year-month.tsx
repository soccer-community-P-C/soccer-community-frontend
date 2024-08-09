import { useQuery } from '@tanstack/react-query';
import { getGameListByLeagueIdYearMonth } from '@/api/league-game/league-games';

const QUERY_KEY = 'leagueGameListByLeagueGameIdYearMonth';

export type GetGameListByLeagueGameIdYearMonthProps = {
  leagueId: number;
  yearMonth: string;
};

function getQueryKey({ leagueId, yearMonth }: GetGameListByLeagueGameIdYearMonthProps) {
  return [QUERY_KEY, leagueId, yearMonth];
}

export function useGetGameListByLeagueGameIdYearMonth({
  leagueId,
  yearMonth,
}: GetGameListByLeagueGameIdYearMonthProps) {
  return useQuery({
    queryKey: getQueryKey({ leagueId, yearMonth }),
    queryFn: () => getGameListByLeagueIdYearMonth({ leagueId, yearMonth }),
  });
}
