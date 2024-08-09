import { useQuery } from '@tanstack/react-query';
import { getGameByTeamId } from '@/api/league-game/league-games';

const QUERY_KEY = 'leagueGameByTeamId';

type TSortType = 'string' | 'number';

export type GetGameListByTeamIdProps = {
  leagueTeamId: number;
  sort?: TSortType[];
  page?: number;
  size?: number;
};

function getQueryKey({ leagueTeamId, size, sort, page }: GetGameListByTeamIdProps) {
  return [QUERY_KEY, leagueTeamId, { page, size, sort }];
}

export function useGetGameListByTeamId({
  leagueTeamId,
  size = 10,
  sort = ['string'],
  page = 0,
}: GetGameListByTeamIdProps) {
  return useQuery({
    queryKey: getQueryKey({ leagueTeamId, sort, page, size }),
    queryFn: () => getGameByTeamId({ leagueTeamId, sort, page, size }),
  });
}
