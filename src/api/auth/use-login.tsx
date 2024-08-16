import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import useLocalStorage from '@/hooks/use-local-storage';
import { login } from '@/api/auth';
import { TLoginInputs } from '@/types/auth';
import { TOKEN_KEY } from '@/constants/auth';

export function useLogin() {
  const [, setToken] = useLocalStorage<string>(TOKEN_KEY, '');
  const router = useRouter();

  return useMutation({
    mutationFn: (loginInputs: TLoginInputs) => login(loginInputs),
    onSuccess: (data) => {
      setToken(data.accessToken);
      router.push('/');
    },
    onError: () => {},
  });
}
