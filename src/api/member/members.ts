import { AxiosResponse } from 'axios';
import { instance } from '@/api/intance';
import { TMember, TUpdateMember, TUpdatePassword } from '@/types/members';

const ENDPOINT = '/member';

export async function getMember() {
  const { data } = await instance.get<TMember>(`${ENDPOINT}/info`);

  return data;
}

export function updateMember(memberUpdates: TUpdateMember) {
  return instance.put<void, AxiosResponse<void>, TUpdateMember>(`${ENDPOINT}/info`, memberUpdates);
}

export function updatePassword(passwordData: TUpdatePassword) {
  return instance.put<void, AxiosResponse<void>, TUpdatePassword>(
    `${ENDPOINT}/password`,
    passwordData,
  );
}
