type PlayerCommentItemProps = {
  nickName: string;
  comment: string;
};

export default function PlayerCommentItem({ nickName, comment }: PlayerCommentItemProps) {
  // Todo: 작성 시간 수정
  return (
    <li className="flex flex-col gap-4 py-4">
      <div className="flex items-center gap-1 text-sm">
        <div className="mr-1 h-8 w-8 rounded-full bg-gray-400" />
        <div>{nickName}</div>•<div className="text-gray-500">1분 전</div>
      </div>
      <div className="whitespace-pre-line text-base">{comment}</div>
    </li>
  );
}
