import CommentItem from '@/components/post/comment-item';
import { TComment } from '@/types/comment';

type CommentListProps = {
  commentList: TComment[];
};

export default function CommentList({ commentList }: CommentListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {commentList.map((comment) => (
        <CommentItem comment={comment} key={comment.commentId} />
      ))}
    </ul>
  );
}
