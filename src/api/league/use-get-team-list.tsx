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

    // 팀 리스트는 시즌이 끝나지 않는한 거의 바뀌지 않으니 staleTime을 길게
    staleTime: Infinity,
  });
}
