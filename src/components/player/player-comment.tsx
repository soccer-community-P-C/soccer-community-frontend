import { FormEvent } from 'react';
import Button from '@/components/common/button';
import { useGetPlayerCommentList, useWritePlayerComment } from '@/api/player';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import { isEmptyContent } from '@/utils/check-content';
import useInput from '@/hooks/useInput';

export default function PlayerComment() {
  const { data: commentData, error, isPending } = useGetPlayerCommentList({ playerId: 1 });
  const { mutate: writeComment } = useWritePlayerComment({ playerId: 1 });
  const { value, onChange } = useInput('');

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>코멘트를 불러오는데 실패했습니다.</div>;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (isEmptyContent(value)) {
      return alert('댓글 내용을 입력해주세요.');
    }

    writeComment({ playerId: 1, comment: value });
  }
  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div>{commentData?.length}개의 댓글</div>
        <textarea
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          id="message"
          onChange={onChange}
          placeholder="댓글을 작성하세요."
          rows={4}
          value={value}
        />
        <Button className="w-28 self-end" type="submit">
          댓글 작성
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
    </>
  );
}
