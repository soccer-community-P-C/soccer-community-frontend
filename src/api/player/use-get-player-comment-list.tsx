import { useQuery } from '@tanstack/react-query';
import { getPlayerCommentList } from '@/api/player/players';
import { TPlayerId } from '@/types/players';

const QUERY_KEY = 'useGetPlayerCommentList';

export function getQueryKeyPlayerCommentList({ playerId }: TPlayerId) {
  return [QUERY_KEY, playerId];
}

export function useGetPlayerCommentList({ playerId }: TPlayerId) {
  return useQuery({
    queryKey: getQueryKeyPlayerCommentList({ playerId }),
    queryFn: () => getPlayerCommentList({ playerId }),
  });
}
