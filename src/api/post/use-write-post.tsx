import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TWritePost } from '@/types/posts';
import useLeagueName from '@/hooks/useLeagueName';
import { writePost } from '@/api/post/posts';

export function useWritePost() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const leagueName = useLeagueName();

  return useMutation({
    mutationFn: ({ post }: { post: TWritePost }) => writePost(post),
    onSuccess: (postId) => {
      queryClient.invalidateQueries({ queryKey: ['posts', leagueName] });
      router.push(`/${leagueName}/board/${postId}`);
    },
  });
}
