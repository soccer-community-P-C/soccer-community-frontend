export type TMember = {
  memberId: number;
  email: string;
  nickname: string;
};

export type TUpdateMember = Omit<TMember, 'email' | 'memberId'>;

export type TUpdatePassword = {
  newPassword: string;
  currentPassword: string;
};
