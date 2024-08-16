import { AxiosResponse } from 'axios';
import { instance } from '@/api/intance';
import { TLoginInputs, TSignupInputs, TSignupRequest } from '@/types/auth';
import { USER_ROLE } from '@/constants/roles';

export function signup(signupInputs: TSignupInputs) {
  return instance.post<number, AxiosResponse<number>, TSignupRequest>('/member/join', {
    ...signupInputs,
    role: USER_ROLE,
  });
}

export async function login(loginInputs: TLoginInputs) {
  const res = await instance.post<
    { accessToken: string },
    AxiosResponse<{ accessToken: string }, TLoginInputs>
  >('/auth/authentication', loginInputs);

  return res.data;
}
