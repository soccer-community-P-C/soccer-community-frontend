import { useEffect, useState } from 'react';
import useLocalStorage from '@/hooks/use-local-storage';
import { TOKEN_KEY } from '@/constants/auth';
import { setAuthHeader, validateToken } from '@/api/auth/auths';

export default function useAuthValidation() {
  const [token, setToken] = useLocalStorage<string>(TOKEN_KEY, '');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!token) setIsAuthenticated(false);
    (async () => {
      const { validated } = await validateToken(token);

      if (validated) {
        setIsAuthenticated(true);
        setAuthHeader(token);
      } else {
        setIsAuthenticated(false);
        setAuthHeader('');
      }
    })();
  }, [token]);

  useEffect(() => {
    if (!isAuthenticated) {
      setAuthHeader('');
      setToken('');
    }
  }, [isAuthenticated]);

  return { isAuthenticated, setIsAuthenticated };
}
