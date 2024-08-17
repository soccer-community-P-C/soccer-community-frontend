import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAllUrls from '@/hooks/use-all-urls';
import { deletePost } from '@/api/post/posts';

export function useDeletePost() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { URL_POST } = useAllUrls();

  return useMutation({
    mutationFn: (postId: string) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      router.push(URL_POST);
    },
  });
}
