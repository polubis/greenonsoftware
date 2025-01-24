'use client';

import { type ReactNode } from 'react';
import { AuthProvider, useAuthContext } from '../lib/auth';

export const AppAuthProvider = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export const useAppAuthContext = useAuthContext;
