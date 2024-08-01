import { useQuery } from '@tanstack/react-query';
import { getPost } from '@/api/post/posts';

export function useGetPost(postId: string) {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
  });
}
