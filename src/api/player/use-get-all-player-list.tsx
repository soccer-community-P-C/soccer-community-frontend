import { useQuery } from '@tanstack/react-query';
import { getAllPlayerList } from '@/api/player/players';

const QUERY_KEY = 'useGetAllPlayerList';

function getQueryKey() {
  return [QUERY_KEY];
}

export function useGetAllPlayerList() {
  return useQuery({
    queryKey: getQueryKey(),
    queryFn: () => getAllPlayerList(),
  });
}
