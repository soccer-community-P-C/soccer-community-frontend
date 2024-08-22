import { useQuery } from '@tanstack/react-query';
import { getMember } from '@/api/member/members';

export function useGetMember() {
  return useQuery({
    queryKey: ['member'],
    queryFn: () => getMember(),
  });
}
