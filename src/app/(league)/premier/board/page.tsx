'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { IconMessage, IconEye, IconThumbUp, IconLoader2 } from '@tabler/icons-react';
import Box from '@/components/common/box';
import Pagination from '@/components/board/pagination';
import Button from '@/components/common/button';
import Input from '@/components/common/input';
import useLeagueName from '@/hooks/useLeagueName';
import { useGetPostList } from '@/api/post/use-get-post-list';

export default function PremierBoardPage() {
  const leagueName = useLeagueName();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page') ?? '1';

  const currentPage = Number(pageParam) - 1;

  const { data, isPending } = useGetPostList(leagueName, currentPage);

  const hasPosts = isPending || (data?.totalElements && data?.totalElements > 0);

  return (
    <>
      <Box className="mx-auto gap-0 px-0 pb-4 pt-2">
        {hasPosts ? null : <span className="mx-auto">글이 없습니다.</span>}
        {isPending ? (
          <IconLoader2 aria-label="로딩중" className="mx-auto animate-spin" role="status" />
        ) : null}
        <ul>
          {data?.findPosts?.map((post) => (
            <li className="flex border-b-[1px] border-zinc-300 py-2" key={post.postId}>
              <div className="flex w-[10%] items-center justify-center gap-1">
                <IconThumbUp className="flex-shrink-0" /> 12K
              </div>
              <div className="flex w-4/5 flex-col gap-2 pr-3">
                <Link href={`/premier/board/${post.postId}`}>{post.title}</Link>
                <div className="flex items-center gap-1 text-sm">
                  <div className="h-5 w-5 rounded-full bg-gray-400" />
                  <div>{post.memberName}</div>•<div className="text-gray-500">1분 전</div>
                </div>
              </div>
              <div className="flex w-[10%] flex-col justify-center">
                <div className="flex gap-2">
                  <IconMessage className="flex-shrink-0" /> 1
                </div>
                <div className="flex gap-2">
                  <IconEye className="flex-shrink-0" /> 24K
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between px-6 pt-4">
          <div />
          {hasPosts ? <Pagination totalPages={data?.totalPages ?? 0} /> : null}
          <Button className="w-28" onClick={() => router.push(`/${leagueName}/write`)} role="link">
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
