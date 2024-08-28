import { TComment } from '@/types/comment';
import { getTimeAgoString } from '@/utils/date-helper';

type CommentItemProps = {
  comment: TComment;
};

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <li className="flex flex-col gap-4 py-4">
      <div className="flex items-center gap-1 text-sm">
        <div className="mr-1 h-8 w-8 rounded-full bg-gray-400" />
        <div>{comment.memberName}</div>•
        <div className="text-gray-500">{getTimeAgoString(comment.createdAt)}</div>
      </div>
      <div className="whitespace-pre-line text-base">{comment.comment}</div>
    </li>
  );
}
