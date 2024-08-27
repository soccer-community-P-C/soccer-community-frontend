import { AxiosResponse } from 'axios';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { updatePassword } from '@/api/member/members';
import { TUpdatePassword } from '@/types/members';

export function useUpdatePassword(
  options?: UseMutationOptions<AxiosResponse<void>, Error, TUpdatePassword>,
) {
  return useMutation({ ...options, mutationFn: updatePassword });
}
