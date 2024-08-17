import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAllUrls from '@/hooks/use-all-urls';
import { writePost } from '@/api/post/posts';
import { TWritePost } from '@/types/posts';

export function useWritePost() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { URL_POST } = useAllUrls();

  return useMutation({
    mutationFn: ({ post }: { post: TWritePost }) => writePost(post),
    onSuccess: (postId) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      router.push(`${URL_POST}/${postId}`);
    },
  });
}
