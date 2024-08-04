import { useQuery } from '@tanstack/react-query';
import { getGameByTeamId } from '@/api/league-game/league-games';

const QUERY_KEY = 'leagueGameByTeamId';

type TSortArray<T extends 'string' | 'number'> = T[];

export type GetGameListByTeamIdProps = {
  leagueTeamId: number;
  sort?: TSortArray<'string' | 'number'>;
  page?: number;
  size?: number;
};

export function getQueryKey({ leagueTeamId, size, sort, page }: GetGameListByTeamIdProps) {
  return [QUERY_KEY, leagueTeamId, { page, size, sort }];
}

export default function useGetGameListByTeamId({
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
