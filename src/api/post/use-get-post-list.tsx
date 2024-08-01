import { useQuery } from '@tanstack/react-query';
import { getPostList } from '@/api/post/posts';

export function useGetPostList(category: string, page: number) {
  return useQuery({
    queryKey: ['posts', category, { page }],
    queryFn: () => getPostList(category, page),
  });
}
