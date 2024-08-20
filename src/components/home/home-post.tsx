'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { IconEye, IconLoader2, IconMessage, IconThumbUp } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import BoxHeading from '@/components/common/box-heading';
import ViewAllLinkItem from '@/components/common/view-all-link-item';
import useAllUrls from '@/hooks/use-all-urls';
import { useGetPostList } from '@/api/post/use-get-post-list';
import Box from '@/components/common/box';

export default function HomePost() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page') ?? '1';
  const { URL_POST } = useAllUrls();

  const currentPage = Number(pageParam) - 1;

  const { data, isPending } = useGetPostList('', currentPage);

  const hasPosts = isPending || (data?.totalElements && data?.totalElements > 0);

  return (
    <div className="flex w-full flex-col bg-white">
      <div className="flex-all-center mb-6 flex justify-between">
        <BoxHeading hTagType="h3">게시글</BoxHeading>
        <ViewAllLinkItem href="/post" />
      </div>
      {hasPosts ? null : <span className="mx-auto">글이 없습니다.</span>}
      {isPending ? (
        <IconLoader2 aria-label="로딩중" className="mx-auto animate-spin" role="status" />
      ) : null}
      <Box className="gap-0 divide-y divide-gray-400 overflow-hidden border-gray-400 p-0">
        {data?.findPosts?.map((post) => (
          <li
            className={twMerge(
              'relative flex flex-col py-2 transition-colors hover:bg-gray-100 sm:flex-row',
              'sm-in:gap-1 sm-in:p-2',
            )}
            key={post.postId}
          >
            <div className="flex gap-1 sm:w-[10%] sm:items-center sm:justify-center sm:border-b-0">
              <IconThumbUp className="h-[16px] w-[16px] flex-shrink-0 md:h-[24px] md:w-[24px]" />
              <span className="text-xs md:text-base">12K</span>
            </div>
            <div className="flex items-center sm:w-[85%] sm:pr-3">
              <Link className="line-clamp-1" href={`${URL_POST}/${post.postId}`}>
                {post.title}
              </Link>
            </div>
            <div
              className={twMerge(
                'flex sm:w-[15%] sm:justify-center sm:gap-2',
                'sm-in:absolute sm-in:right-0 sm-in:gap-2 sm-in:pr-4',
              )}
            >
              <div className="flex md:gap-2">
                <IconMessage className="h-[16px] w-[16px] flex-shrink-0 md:h-[24px] md:w-[24px]" />
                <span className="text-xs md:text-base">1</span>
              </div>
              <div className="flex md:gap-2">
                <IconEye className="h-[16px] w-[16px] flex-shrink-0 md:h-[24px] md:w-[24px]" />
                <span className="text-xs md:text-base">24K</span>
              </div>
            </div>
          </li>
        ))}
      </Box>
    </div>
  );
}
