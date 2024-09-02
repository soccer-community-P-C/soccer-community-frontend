'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import Box from '@/components/common/box';
import Pagination from '@/components/post/pagination';
import { Button } from '@/components/ui/button';
import PostItem from '@/components/post/post-item';
import { useGetPostList } from '@/api/post/use-get-post-list';
import { LoadingSpinner } from '@/components/common/loading-spinner';

export default function PostListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page') ?? '1';

  const currentPage = Number(pageParam) - 1;

  const { data, isPending } = useGetPostList('', currentPage);

  const hasPosts = isPending || (data?.totalElements && data?.totalElements > 0);

  return (
    <>
      <Box className="mx-auto gap-0 px-0 pb-2 pt-2">
        {hasPosts ? null : <span className="mx-auto">글이 없습니다.</span>}
        {isPending ? <LoadingSpinner /> : null}
        <ul>{data?.findPosts?.map((post) => <PostItem key={post.postId} post={post} />)}</ul>
        <div className="flex items-center justify-between px-4 pt-2">
          <div />
          {hasPosts ? <Pagination totalPages={data?.totalPages ?? 0} /> : null}

          <Button onClick={() => router.push('/write')} role="link">
            글쓰기
          </Button>
        </div>
      </Box>
      <div className="mx-auto mt-4 flex max-w-sm">
        <Input />
        <Button className="h-10">검색</Button>
      </div>
    </>
  );
}
