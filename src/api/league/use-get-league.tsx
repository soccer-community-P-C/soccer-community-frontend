import { useQuery } from '@tanstack/react-query';
import { getLeague, GetLeagueProps } from '@/api/league/leagues';

const QUERY_KEY = 'AllLeague';

function getQueryKey({ season, competition }: GetLeagueProps) {
  return [QUERY_KEY, season, competition];
}

export function useGetLeague({ season, competition }: GetLeagueProps) {
  return useQuery({
    queryKey: getQueryKey({ season, competition }),
    queryFn: () => getLeague({ season, competition }),
    staleTime: 600 * 1000 * 6,
  });
}
