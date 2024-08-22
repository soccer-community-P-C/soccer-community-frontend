import { instance } from '@/api/intance';
import { TMember } from '@/types/members';

const ENDPOINT = '/member';

export async function getMember() {
  const { data } = await instance.get<TMember>(`${ENDPOINT}/info`);

  return data;
}
