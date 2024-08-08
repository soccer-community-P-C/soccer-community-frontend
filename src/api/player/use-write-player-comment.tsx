import { useMutation, useQueryClient } from '@tanstack/react-query';
import { writePlayerComment } from '@/api/player/players';
import { TPlayerId, TWritePlayerComment } from '@/types/players';
import { getQueryKeyPlayerCommentList } from '@/api/player/use-get-player-comment-list';

export function useWritePlayerComment({ playerId }: TPlayerId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ playerId, comment }: TWritePlayerComment) =>
      writePlayerComment({ playerId, comment }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getQueryKeyPlayerCommentList({ playerId }) });
    },
  });
}
