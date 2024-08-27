import { useQuery } from '@tanstack/react-query';
import { getTeamRankList, GetTeamRankListProps } from '@/api/league/leagues';

const QUERY_KEY = 'useGetTeamRankList';

function getQueryKey({ season, matchDay, leagueId }: GetTeamRankListProps) {
  return [QUERY_KEY, leagueId, season, matchDay];
}

export function useGetTeamRankList({ season, matchDay, leagueId }: GetTeamRankListProps) {
  return useQuery({
    queryKey: getQueryKey({ season, matchDay, leagueId }),
    queryFn: () => getTeamRankList({ season, matchDay, leagueId }),
  });
}
