import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import useLocalStorage from '@/hooks/use-local-storage';
import { useAuth } from '@/contexts/auth-context';
import { login } from '@/api/auth';
import { setAuthHeader } from '@/api/auth/auths';
import { TLoginInputs } from '@/types/auth';
import { TOKEN_KEY } from '@/constants/auth';

export function useLogin() {
  const router = useRouter();
  const [, setToken] = useLocalStorage<string>(TOKEN_KEY, '');
  const { setIsAuthenticated } = useAuth();

  return useMutation({
    mutationFn: (loginInputs: TLoginInputs) => login(loginInputs),
    onSuccess: ({ accessToken }) => {
      setToken(accessToken);
      setAuthHeader(accessToken);
      setIsAuthenticated(true);
      router.push('/');
    },
    onError: () => {},
  });
}
