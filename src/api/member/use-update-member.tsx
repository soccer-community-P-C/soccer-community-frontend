import { AxiosResponse } from 'axios';
import { UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMember } from '@/api/member/members';
import { TUpdateMember } from '@/types/members';

export function useUpdateMember(
  options?: UseMutationOptions<AxiosResponse<void>, Error, TUpdateMember>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: updateMember,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['member'] });

      if (options?.onSuccess) {
        options?.onSuccess(data, variables, context);
      }
    },
  });
}
