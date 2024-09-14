import { useQuery } from '@tanstack/react-query';
import { getTeamList, GetTeamListProps } from '@/api/league/leagues';

const QUERY_KEY = 'useGetTeamList';

function getQueryKey({ years, leagueId }: GetTeamListProps) {
  return [QUERY_KEY, years, leagueId];
}

export function useGetTeamList({ years, leagueId }: GetTeamListProps) {
  return useQuery({
    queryKey: getQueryKey({ years, leagueId }),
    queryFn: () => getTeamList({ years, leagueId }),
  });
}
