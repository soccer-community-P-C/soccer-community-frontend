import { useQuery } from '@tanstack/react-query';
import { getAllGameList } from '@/api/league-game/league-games';

const QUERY_KEY = 'leagueGameAll';

export type GetAllGameList = {
  startDate: string;
  endDate: string;
  leagueId: number;
  page?: number;
  size?: number;
};

export function getQueryKey({ startDate, endDate, leagueId, page, size }: GetAllGameList) {
  return [QUERY_KEY, startDate, endDate, leagueId, { page: page, size: size }];
}

export default function useGetAllGameList(
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
