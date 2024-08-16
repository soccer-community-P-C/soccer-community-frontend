import { TUserRole } from '@/constants/roles';

export type TSignupInputs = {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
};

export type TSignupRequest = TSignupInputs & {
  role: TUserRole;
};

export type TLoginInputs = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  accessToken: string;
};
