import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useLeagueName from '@/hooks/useLeagueName';
import { deletePost } from '@/api/post/posts';

export function useDeletePost() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const leagueName = useLeagueName();

  return useMutation({
    mutationFn: (postId: string) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts', leagueName] });
      router.push(`/${leagueName}/board/`);
    },
  });
}
