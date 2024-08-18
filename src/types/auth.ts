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
