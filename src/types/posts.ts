export type TWritePost = {
  title: string;
  content: string;
  category: string;
};

export type TGetPostList = {
  findPosts: {
    title: string;
    content: string;
    memberId: number;
    memberName: string;
    postCategory: string;
    postId: number;
    postRegisterDate: Date;
  }[];
  totalPages: number;
  totalElements: number;
};

export type TPost = {
  postId: number;
  title: string;
  content: string;
  postRegisterDate: string;
  postCategory: string;
  memberId: number;
  memberName: string;
  viewCount: number;
  likeCount: number;
  commentSize: number;
};
