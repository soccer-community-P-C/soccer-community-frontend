export type TGetCommentList = {
  findComments: TComment[];
};

export type TComment = {
  postId: number;
  comment: string;
  commentId: number;
  memberId: number;
  memberName: string;
  createdAt: string;
  updatedAt: string;
};
