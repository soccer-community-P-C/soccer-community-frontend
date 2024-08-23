export type TMember = {
  memberId: number;
  email: string;
  nickName: string;
};

export type TUpdateMember = Omit<TMember, 'email' | 'memberId'>;
