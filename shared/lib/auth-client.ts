import { signIn, signOut } from 'next-auth/react';

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: '/' });
};

export const logout = async () => {
  await signOut({ redirectTo: '/auth/login' });
};
