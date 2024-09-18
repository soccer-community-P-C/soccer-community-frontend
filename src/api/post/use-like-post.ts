import { useMutation, useQueryClient } from '@tanstack/react-query';
import { likePost } from '@/api/post/posts';
import { TPostDetail } from '@/types/posts';

export function useLikePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likePost,
    onMutate: async (postId) => {
      await queryClient.cancelQueries({ queryKey: ['post', postId] });

      const oldData = queryClient.getQueryData<TPostDetail>(['post', postId]);
      queryClient.setQueryData(['post', postId], {
        ...oldData,
        likeCount: (oldData?.likeCount as number) + 1,
      });

      return { oldData };
    },
    onError: (err, postId, context) => {
      queryClient.setQueryData(['post', postId], { ...context?.oldData });
    },
  });
}
