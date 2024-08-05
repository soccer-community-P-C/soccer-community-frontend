import { useMutation, useQueryClient } from '@tanstack/react-query';
import { writePlayerComment } from '@/api/player/players';
import { TPlayerId, TWritePlayerComment } from '@/types/players';

const QUERY_KEY = 'useWritePlayerComment';

function getQueryKey({ playerId }: TPlayerId) {
  return [QUERY_KEY, playerId];
}

export function useWritePlayerComment({ playerId }: TPlayerId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ playerId, comment }: TWritePlayerComment) =>
      writePlayerComment({ playerId, comment }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getQueryKey({ playerId }) });
    },
  });
}
