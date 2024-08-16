import { useQuery } from '@tanstack/react-query';
import { getAllGameList, GetAllGameListProps } from '@/api/league/leagues';

const QUERY_KEY = 'leagueGameAll';

function getQueryKey({ startDate, endDate, leagueId, page, size }: GetAllGameListProps) {
  return [QUERY_KEY, startDate, endDate, leagueId, { page: page, size: size }];
}

export function useGetAllGameList(
  startDate: string,
  endDate: string,
  leagueId: number,
  page?: number,
  size?: number,
) {
  return useQuery({
    queryKey: getQueryKey({ startDate, endDate, leagueId, page, size }),
    queryFn: () => getAllGameList({ startDate, endDate, leagueId, page, size }),
  });
}
