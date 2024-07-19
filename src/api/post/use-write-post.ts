import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { TWritePost } from '@/types/posts';
import useLeagueName from '@/hooks/useLeagueName';
import { writePost } from '@/api/post/posts';

export function useWritePost() {
  const router = useRouter();
  const leagueName = useLeagueName();

  return useMutation({
    mutationFn: ({ post, memberId }: { post: TWritePost; memberId: number }) =>
      writePost(post, memberId),
    onSuccess: (postId) => router.push(`/${leagueName}/board/${postId}`),
  });
}
