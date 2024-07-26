import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import useLeagueName from '@/hooks/useLeagueName';
import { deletePost } from '@/api/post/posts';

export function useDeletePost() {
  const router = useRouter();
  const leagueName = useLeagueName();

  return useMutation({
    mutationFn: (postId: string) => deletePost(postId),
    onSuccess: () => router.push(`/${leagueName}/board/`),
  });
}
