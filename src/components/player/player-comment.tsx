import { FormEvent } from 'react';
import Button from '@/components/common/button';
import { useGetPlayerCommentList, useWritePlayerComment } from '@/api/player';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import useInput from '@/hooks/useInput';
import PlayerCommentItem from '@/components/player/player-comment-item';

export default function PlayerComment() {
  const { data: commentList, error, isPending } = useGetPlayerCommentList({ playerId: 1 });
  const { value, onChange, clear } = useInput('');
  const { mutateAsync: writeComment } = useWritePlayerComment({ playerId: 1 });
  let reversedCommentList: typeof commentList = [];

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>코멘트를 불러오는데 실패했습니다.</div>;
  }

  if (commentList) {
    reversedCommentList = [...commentList].reverse();
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (value.trim() === '') {
      clear();
      return alert('댓글 내용을 입력해주세요.');
    }

    try {
      await writeComment({ playerId: 1, comment: value });
      clear();
    } catch {
      alert('댓글 작성에 실패했습니다.');
    }
  }

  // Todo: key로 설정할 값이 없어 임시로 index로 키설정

  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div>{commentList?.length}개의 댓글</div>
        <textarea
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          id="message"
          maxLength={500}
          onChange={onChange}
          placeholder="댓글을 작성하세요."
          rows={4}
          value={value}
        />
        <Button className="w-28 self-end" type="submit">
          댓글 작성
        </Button>
      </form>
      <ul className="flex flex-col gap-2 divide-y border-t">
        {reversedCommentList?.map(({ comment, nickName }, index) => (
          <PlayerCommentItem comment={comment} key={index} nickName={nickName} />
        ))}
      </ul>
    </>
  );
}
