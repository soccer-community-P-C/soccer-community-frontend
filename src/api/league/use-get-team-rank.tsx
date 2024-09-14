import { useQuery } from '@tanstack/react-query';
import { getTeamRankList, GetTeamRankListProps } from '@/api/league/leagues';

const QUERY_KEY = 'useGetTeamRankList';

function getQueryKey({ season, leagueId }: GetTeamRankListProps) {
  return [QUERY_KEY, leagueId, season];
}

export function useGetTeamRankList({ season, leagueId }: GetTeamRankListProps) {
  return useQuery({
    queryKey: getQueryKey({ season, leagueId }),
    queryFn: () => getTeamRankList({ season, leagueId }),
  });
}
