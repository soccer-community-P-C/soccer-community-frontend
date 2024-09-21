import { AxiosResponse } from 'axios';
import { instance, oauthInstance } from '@/api/intance';
import { TLoginInputs, TLoginResponse, TSignupInputs, TSignupRequest } from '@/types/auth';
import { USER_ROLE } from '@/constants/roles';

export function signup(signupInputs: TSignupInputs) {
  return instance.post<number, AxiosResponse<number>, TSignupRequest>('/member/join', {
    ...signupInputs,
    role: USER_ROLE,
  });
}

export async function login(loginInputs: TLoginInputs) {
  const res = await instance.post<TLoginResponse, AxiosResponse<TLoginResponse, TLoginInputs>>(
    '/auth/authentication',
    loginInputs,
  );

  return res.data;
}

export async function validateToken(token: string) {
  try {
    await instance.post('/auth/validate', null, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { validated: true };
  } catch (error) {
    return { validated: false };
  }
}

export function setAuthHeader(token: string) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export async function googleAuth() {
  const { data } = await oauthInstance.get<TLoginResponse>('');
  // const { data } = await oauthInstance.get<TLoginResponse>('/authorization/google');

  return data;
}
