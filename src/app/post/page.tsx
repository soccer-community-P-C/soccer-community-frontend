'use client';

import { IconLoader2 } from '@tabler/icons-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import Input from '@/components/common/input';
import Box from '@/components/common/box';
import Pagination from '@/components/post/pagination';
import Button from '@/components/common/button';
import PostItem from '@/components/post/post-item';
import { useGetPostList } from '@/api/post/use-get-post-list';

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
        {isPending ? (
          <IconLoader2 aria-label="로딩중" className="mx-auto animate-spin" role="status" />
        ) : null}
        <ul>{data?.findPosts?.map((post) => <PostItem key={post.postId} post={post} />)}</ul>
        <div className="flex items-center justify-between px-4 pt-2">
          <div />
          {hasPosts ? <Pagination totalPages={data?.totalPages ?? 0} /> : null}

          <Button
            className={twMerge('sm:w-28', 'sm-in:w-12 sm-in:p-2 sm-in:text-xs')}
            onClick={() => router.push('/write')}
            role="link"
          >
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
