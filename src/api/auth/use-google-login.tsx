import { useQuery } from '@tanstack/react-query';
import { googleAuth } from '@/api/auth/auths';

export function useGoogleLogin() {
  // return useMutation({
  //   mutationFn: (loginInputs: TLoginInputs) => login(loginInputs),
  //   onSuccess: ({ accessToken }) => {
  //     setToken(accessToken);
  //     setAuthHeader(accessToken);
  //     setIsAuthenticated(true);
  //   },
  // });
  return useQuery({ queryKey: ['google-login'], queryFn: googleAuth, enabled: false });
}
