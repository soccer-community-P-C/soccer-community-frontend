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
