import { useQuery } from '@tanstack/react-query';
import { getScheduleList } from '@/api/league-game/league-games';
import { GetScheduleListProps } from '@/api/league-game/league-games-types';

const QUERY_KEY = 'leagueGameByLeagueGameId';

function getQueryKey({ leagueId, leagueTeamId, yearMonth }: GetScheduleListProps) {
  return [QUERY_KEY, leagueId, leagueTeamId, yearMonth];
}

export function useGetScheduleList({ leagueId, leagueTeamId, yearMonth }: GetScheduleListProps) {
  return useQuery({
    queryKey: getQueryKey({ leagueId, leagueTeamId, yearMonth }),
    queryFn: () => getScheduleList({ leagueId, leagueTeamId, yearMonth }),
  });
}
