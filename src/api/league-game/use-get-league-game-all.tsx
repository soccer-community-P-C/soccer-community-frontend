import { useQuery } from '@tanstack/react-query';
import { getLeagueGameAll } from '@/api/league-game/league-games';

const QUERY_KEY = 'leagueGameByDate';

export function getQueryKey(
  startDate: string,
  endDate: string,
  leagueId: number,
  page?: number,
  size?: number,
) {
  if (page === undefined && size === undefined) {
    return [QUERY_KEY, startDate, endDate, leagueId];
  } else if (size === undefined) {
    return [QUERY_KEY, startDate, endDate, leagueId, `page=${page}`];
  } else if (page === undefined) {
    return [QUERY_KEY, startDate, endDate, leagueId, `size=${size}`];
  }

  return [QUERY_KEY, startDate, endDate, leagueId, `page=${page}`, `size=${size}`];
}

export default function useGetLeagueGameAll(
  startDate: string,
  endDate: string,
  leagueId: number,
  page?: number,
  size?: number,
) {
  return useQuery({
    queryKey: getQueryKey(startDate, endDate, leagueId, page, size),
    queryFn: () => getLeagueGameAll(startDate, endDate, leagueId, page, size),
  });
}
