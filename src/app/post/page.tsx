'use client';

import { IconEye, IconLoader2, IconMessage, IconThumbUp } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import Input from '@/components/common/input';
import Box from '@/components/common/box';
import Pagination from '@/components/post/pagination';
import Button from '@/components/common/button';
import useAllUrls from '@/hooks/use-all-urls';
import { useGetPostList } from '@/api/post/use-get-post-list';

export default function PostListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page') ?? '1';
  const { URL_POST } = useAllUrls();

  const currentPage = Number(pageParam) - 1;

  const { data, isPending } = useGetPostList('', currentPage);

  const hasPosts = isPending || (data?.totalElements && data?.totalElements > 0);
  // Todo 윈도우 사이즈 훅으로 변경해야할듯

  return (
    <>
      {/*<Box className="mx-auto gap-0 px-0 pb-4 pt-2">*/}
      <Box className="mx-auto gap-0 px-0 pb-2 pt-2">
        {hasPosts ? null : <span className="mx-auto">글이 없습니다.</span>}
        {isPending ? (
          <IconLoader2 aria-label="로딩중" className="mx-auto animate-spin" role="status" />
        ) : null}
        <ul>
          {data?.findPosts?.map((post) => (
            <li
              className={twMerge(
                'relative flex flex-col border-b-[1px] border-zinc-300 py-2 sm:flex-row ',
                'sm-in:gap-2 sm-in:p-4',
              )}
              key={post.postId}
            >
              <div className="flex gap-1 sm:w-[10%] sm:items-center sm:justify-center">
                <IconThumbUp className="flex-shrink-0" /> 12K
              </div>
              <div className="flex flex-col gap-2 sm:w-4/5 sm:pr-3">
                <Link href={`${URL_POST}/${post.postId}`}>{post.title}</Link>
                <div className="flex items-center gap-1 text-sm">
                  <div className="h-5 w-5 rounded-full bg-gray-400" />
                  <div>{post.memberName}</div>•<div className="text-gray-500">1분 전</div>
                </div>
              </div>
              <div
                className={twMerge(
                  'flex sm:w-[10%] sm:flex-col sm:justify-center',
                  'sm-in:absolute sm-in:right-0 sm-in:gap-2 sm-in:pr-4',
                )}
              >
                <div className="flex sm:gap-2">
                  <IconMessage className="flex-shrink-0" /> 1
                </div>
                <div className="flex sm:gap-2">
                  <IconEye className="flex-shrink-0" /> 24K
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between px-4 pt-2">
          <div />
          {/*{hasPosts ? <Pagination totalPages={data?.totalPages ?? 0} /> : null}*/}
          {hasPosts ? (
            <div className="flex-all-center mb-4 h-full w-full">
              <Pagination totalPages={data?.totalPages ?? 0} />
            </div>
          ) : null}
          {/*버튼의 위치가 약간 어색해 보여 수정 논의 내용*/}
          <Button className="w-28" onClick={() => router.push('/write')} role="link">
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
