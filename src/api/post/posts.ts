import { instance } from '@/api/intance';
import { TGetPostList, TPost, TWritePost } from '@/types/posts';

const ENDPOINT = '/post';

export async function getPostList(category: string, page: number) {
  const { data } = await instance.get<TGetPostList>('/post/search', {
    params: { category, page },
  });

  return data;
}

export async function getPost(postId: string) {
  const { data } = await instance.get<TPost>(`${ENDPOINT}/search/${postId}`);

  return data;
}

export async function writePost(post: TWritePost) {
  const { data } = await instance.post<number>(`${ENDPOINT}`, post);

  return data;
}

export async function deletePost(postId: string) {
  const { data } = await instance.delete(`${ENDPOINT}/${postId}`);

  return data;
}
