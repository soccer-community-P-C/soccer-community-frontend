import { useMutation, useQueryClient } from '@tanstack/react-query';
import { writeComment } from '@/api/comment/comments';

export function useWriteComment(postId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (comment: string) => writeComment(postId, comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
  });
}
