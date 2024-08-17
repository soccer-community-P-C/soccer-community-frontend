import { useQuery } from '@tanstack/react-query';
import { getGameByTeamId } from '@/api/league-game/league-games';
import { GetGameListByTeamIdProps } from '@/api/league-game/league-games-types';

const QUERY_KEY = 'leagueGameByTeamId';

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
