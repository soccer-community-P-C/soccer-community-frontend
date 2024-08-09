import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editPost } from '@/api/post/posts';
import { TWritePost } from '@/types/posts';

export function useEditPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ post, postId }: { post: TWritePost; postId: number }) => editPost(post, postId),
    onSuccess: (postId) => {
      queryClient.invalidateQueries({ queryKey: ['post', String(postId)] });
    },
  });
}
