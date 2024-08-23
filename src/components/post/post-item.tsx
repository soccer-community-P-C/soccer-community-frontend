import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { IconEye, IconMessage, IconThumbUp } from '@tabler/icons-react';
import useAllUrls from '@/hooks/use-all-urls';
import { TGetPostList } from '@/types/posts';
import { getTimeAgoString } from '@/utils/date-helper';

type PostItemProps = {
  post: TGetPostList['findPosts'][number];
};

export default function PostItem({ post }: PostItemProps) {
  const { URL_POST } = useAllUrls();

  return (
    <li
      className={twMerge(
        'relative flex flex-col border-b-[1px] border-zinc-300 py-2 sm:flex-row ',
        'sm-in:gap-2 sm-in:p-4',
      )}
    >
      <div className="flex gap-1 sm:w-[10%] sm:items-center sm:justify-center">
        <IconThumbUp className="h-[16px] w-[16px] flex-shrink-0 md:h-[24px] md:w-[24px]" />
        <span className="text-xs md:text-base">{post.likeCount}</span>
      </div>
      <div className="flex flex-col gap-2 sm:w-4/5 sm:pr-3">
        <Link className="line-clamp-2" href={`${URL_POST}/${post.postId}`}>
          {post.title}
        </Link>
        <div className="flex items-center gap-1 text-sm">
          <div className="h-5 w-5 rounded-full bg-gray-400" />
          <div>{post.memberName}</div>•
          <div className="text-gray-500">{getTimeAgoString(post.postRegisterDate)}</div>
        </div>
      </div>
      <div
        className={twMerge(
          'flex sm:w-[10%] sm:flex-col sm:justify-center',
          'sm-in:absolute sm-in:right-0 sm-in:gap-2 sm-in:pr-4',
        )}
      >
        <div className="flex md:gap-2">
          <IconMessage className="h-[16px] w-[16px] flex-shrink-0 md:h-[24px] md:w-[24px]" />
          <span className="text-xs md:text-base">{post.commentCount}</span>
        </div>
        <div className="flex md:gap-2">
          <IconEye className="h-[16px] w-[16px] flex-shrink-0 md:h-[24px] md:w-[24px]" />
          <span className="text-xs md:text-base">{post.viewCount}</span>
        </div>
      </div>
    </li>
  );
}
