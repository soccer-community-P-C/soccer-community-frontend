import { useMutation, useQueryClient } from '@tanstack/react-query';
import { writePlayerComment } from '@/api/player/players';
import { TPlayerId, TWritePlayerComment } from '@/types/players';
import { getQueryKeyPlayerCommentList } from '@/api/player/use-get-player-comment-list';

type UseWritePlayerCommentProps = TPlayerId & {
  clear: () => void;
};

export function useWritePlayerComment({ playerId, clear }: UseWritePlayerCommentProps) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ playerId, comment }: TWritePlayerComment) =>
      writePlayerComment({ playerId, comment }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getQueryKeyPlayerCommentList({ playerId }) });
      clear();
    },
  });
}
