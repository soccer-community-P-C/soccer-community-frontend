export type TWritePost = {
  title: string;
  content: string;
  category: string;
};

export type TGetPostList = {
  findPosts: TPostListItem[];
  totalPages: number;
  totalElements: number;
};

type TPostListItem = TPostDetail & { commentCount: number };

export type TPostDetail = {
  title: string;
  content: string;
  memberId: number;
  memberName: string;
  postId: number;
  postRegisterDate: string;
  postCategory: string;
  viewCount: number;
  likeCount: number;
};
