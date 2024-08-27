'use client';

import React, { createContext, ReactNode } from 'react';
import useAuthValidation from '@/hooks/use-auth-validation';
import useLocalStorage from '@/hooks/use-local-storage';
import { setAuthHeader } from '@/api/auth/auths';
import { TOKEN_KEY } from '@/constants/auth';

type TAuthContext = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [, setToken] = useLocalStorage<string>(TOKEN_KEY, '');
  const { isAuthenticated, setIsAuthenticated } = useAuthValidation();

  function logout() {
    setAuthHeader('');
    setToken('');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authContext = React.useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return authContext;
}
