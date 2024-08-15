import { useQuery } from '@tanstack/react-query';
import { GetGameListByTeamIdYearMonthProps } from '@/api/league-game/league-games-types';
import { getGameListByTeamYearMonth } from '@/api/league-game/league-games';

const QUERY_KEY = 'useGetGameListByTeamIdYearMonth';

function getQueryKey({ leagueTeamId, yearMonth }: GetGameListByTeamIdYearMonthProps) {
  return [QUERY_KEY, leagueTeamId, yearMonth];
}

export function useGetGameListByTeamIdYearMonth({
  leagueTeamId,
  yearMonth,
}: GetGameListByTeamIdYearMonthProps) {
  return useQuery({
    queryKey: getQueryKey({ leagueTeamId, yearMonth }),
    queryFn: () => getGameListByTeamYearMonth({ leagueTeamId, yearMonth }),
  });
}
