import { getTimeAgoString } from '@/utils/date-helper';

type PlayerCommentItemProps = {
  nickName: string;
  comment: string;
  createdAt: string;
};

export default function PlayerCommentItem({
  nickName,
  comment,
  createdAt,
}: PlayerCommentItemProps) {
  const writingTime = getTimeAgoString(createdAt);
  return (
    <li className="flex flex-col gap-4 py-4">
      <div className="flex items-center gap-1 text-sm">
        <div className="mr-1 h-8 w-8 rounded-full bg-gray-400" />
        <div>{nickName}</div>•<div className="text-gray-500">{writingTime}</div>
      </div>
      <div className="whitespace-pre-line text-base">{comment}</div>
    </li>
  );
}
