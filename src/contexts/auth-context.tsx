'use client';

import React, { createContext, ReactNode } from 'react';
import useAuthValidation from '@/hooks/use-auth-validation';

type TAuthContext = {
  isAuthenticated: boolean;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = useAuthValidation();

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const authContext = React.useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return authContext;
}
