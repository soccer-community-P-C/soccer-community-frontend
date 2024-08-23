import { useQuery } from '@tanstack/react-query';
import { getTeamRank, GetTeamRankProps } from '@/api/league/leagues';

const QUERY_KEY = 'useGetTeamRank';

function getQueryKey({ season, matchDay, leagueId }: GetTeamRankProps) {
  return [QUERY_KEY, leagueId, season, matchDay];
}

export function useGetTeamRank({ season, matchDay, leagueId }: GetTeamRankProps) {
  return useQuery({
    queryKey: getQueryKey({ season, matchDay, leagueId }),
    queryFn: () => getTeamRank({ season, matchDay, leagueId }),
  });
}
