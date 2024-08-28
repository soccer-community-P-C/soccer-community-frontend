import { useQuery } from '@tanstack/react-query';
import { getCommentList } from '@/api/comment/comments';

export function useGetCommentList(postId: string) {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getCommentList(postId),
  });
}
