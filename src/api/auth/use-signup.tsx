import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { signup } from '@/api/auth';
import { TSignupInputs } from '@/types/auth';

export function useSignup() {
  const router = useRouter();

  return useMutation({
    mutationFn: (signupInputs: TSignupInputs) => signup(signupInputs),
    onSuccess: () => router.push('/login'),
  });
}
