import { useQuery } from '@tanstack/react-query';
import { TPlayerId } from '@/types/players';
import { getPlayer } from '@/api/player/players';

const QUERY_KEY = 'useGetPlayer';

function getQueryKey({ playerId }: TPlayerId) {
  return [QUERY_KEY, playerId];
}

export function useGetPlayer({ playerId }: TPlayerId) {
  return useQuery({
    queryKey: getQueryKey({ playerId }),
    queryFn: () => getPlayer({ playerId }),
  });
}
