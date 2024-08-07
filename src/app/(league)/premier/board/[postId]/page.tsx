'use client';

import sanitizeHtml from 'sanitize-html';
import { IconEye, IconMessage, IconThumbUp } from '@tabler/icons-react';
import Box from '@/components/common/box';
import Button from '@/components/common/button';
import LoadingSpinner from '@/components/common/loading-spinner';
import useInput from '@/hooks/useInput';
import { useDeletePost, useGetPost } from '@/api/post';
import { useWriteComment } from '@/api/comment';
import { getTimeAgoString } from '@/utils/date-helper';
import 'react-quill/dist/quill.snow.css';
import { LoadingSpinner } from '@/components/common/loading-spinner';

type PostPageProps = {
  params: { postId: string };
};

export default function PostPage({ params }: PostPageProps) {
  const { data: post, isError: isErrorPost, isPending: isPendingPost } = useGetPost(params.postId);
  const { mutate: deletePost } = useDeletePost();
  const { mutateAsync: writeComment, isPending: isPendingWriteComment } = useWriteComment(
    params.postId,
  );

  const comment = useInput();

  function handleDeletePost() {
    if (confirm('글을 삭제하시겠습니까?')) {
      deletePost(params.postId);
    }
  }

  async function handleWriteComment(e: React.FormEvent) {
    e.preventDefault();
    if (comment.value.trim() === '') return alert('댓글을 입력해주세요.');

    try {
      await writeComment(comment.value);
      comment.clear();
    } catch {
      alert('댓글 작성에 실패했습니다.');
    }
  }

  if (isPendingPost) {
    return (
      <Box>
        <LoadingSpinner />
      </Box>
    );
  }

  if (isErrorPost && !isPendingPost) {
    return <Box>글을 불러오는데 실패했습니다.</Box>;
  }

  return (
    <Box>
      <div className="text-2xl">{post?.title}</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gray-400" />
          <div>{post?.memberName}</div>
        </div>
        <div className="flex items-center gap-3">
          {post?.postRegisterDate ? <div>{getTimeAgoString(post?.postRegisterDate)}</div> : null}
          <div className="h-3 w-[1px] bg-gray-400" />
          <div className="flex items-center gap-1">
            <IconEye className="h-5 w-5" />
            {post?.viewCount}
          </div>
          <div className="h-3 w-[1px] bg-gray-400" />
          <div className="flex items-center gap-1">
            <IconThumbUp /> {post?.likeCount}
          </div>
          <div className="h-3 w-[1px] bg-gray-400" />
          <div className="flex items-center gap-1">
            <IconMessage /> {post?.commentSize}
          </div>
        </div>
      </div>
      <div className="ql-snow">
        {post?.content ? (
          <div
            className="ql-editor"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(post?.content, {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
              }),
            }}
          />
        ) : null}
      </div>
      <div className="flex justify-between">
        <button className="flex w-14 cursor-pointer items-center gap-1" type="button">
          <IconThumbUp className="h-7 w-7" /> {post?.likeCount}
        </button>
        <div className="flex gap-2">
          <button type="button">수정</button>
          <button className="text-red-500" onClick={handleDeletePost} type="button">
            삭제
          </button>
        </div>
      </div>
      <hr />
      <form className="flex flex-col gap-2" onSubmit={handleWriteComment}>
        <div>{post?.commentSize}개의 댓글</div>
        <textarea
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          id="message"
          onChange={comment.onChange}
          placeholder="댓글을 작성하세요."
          rows={4}
          value={comment.value}
        />
        <Button
          className="w-28 self-end"
          disabled={isPendingWriteComment ? true : false}
          type="submit"
        >
          {isPendingWriteComment ? <LoadingSpinner /> : '댓글 작성'}
        </Button>
      </form>
      <ul className="flex flex-col gap-2">
        <li className="flex flex-col gap-4 py-4">
          <div className="flex items-center gap-1 text-sm">
            <div className="mr-1 h-8 w-8 rounded-full bg-gray-400" />
            <div>닉네임</div>•<div className="text-gray-500">1분 전</div>
          </div>
          <div className="whitespace-pre-line text-base">댓글</div>
        </li>
      </ul>
    </Box>
  );
}
