import { AxiosResponse } from 'axios';
import { instance } from '@/api/intance';
import { TSignupInputs, TSignupRequest } from '@/types/auth';
import { USER_ROLE } from '@/constants/roles';

export async function signup(signupInputs: TSignupInputs) {
  return instance.post<number, AxiosResponse<number>, TSignupRequest>('/member/join', {
    ...signupInputs,
    role: USER_ROLE,
  });
}
