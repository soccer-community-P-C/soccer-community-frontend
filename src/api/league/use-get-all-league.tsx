import { useQuery } from '@tanstack/react-query';
import { getAllLeague } from '@/api/league/leagues';

const QUERY_KEY = 'AllLeague';

function getQueryKey() {
  return [QUERY_KEY];
}

export function useGetAllLeague() {
  return useQuery({
    queryKey: getQueryKey(),
    queryFn: () => getAllLeague(),
    staleTime: 600 * 1000 * 6,
  });
}
