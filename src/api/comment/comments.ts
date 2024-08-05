import { instance } from '@/api/intance';

const ENDPOINT = '/comment';

export function writeComment(postId: string, comment: string) {
  return instance.post(`${ENDPOINT}/${postId}`, { content: comment });
}
