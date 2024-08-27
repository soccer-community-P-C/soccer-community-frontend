import { instance } from '@/api/intance';
import { TGetCommentList } from '@/types/comment';

const ENDPOINT = '/comment';

export async function getCommentList(postId: string) {
  const { data } = await instance.get<TGetCommentList>(`${ENDPOINT}/search/${postId}`);
  return data.findComments;
}

export function writeComment(postId: string, comment: string) {
  return instance.post(`${ENDPOINT}/${postId}`, { content: comment });
}
