import { instance } from '@/api/intance';
import { TWritePost } from '@/types/posts';

const ENDPOINT = '/post';

export async function writePost(post: TWritePost, memberId: number) {
  const { data } = await instance.post<number>(`${ENDPOINT}/${memberId}`, post);

  return data;
}

export async function deletePost(postId: string) {
  const { data } = await instance.delete(`${ENDPOINT}/${postId}`);

  return data;
}
