'use client';

import { logout } from '@/shared/lib/auth-client';
import { Button } from '../ui/button';

export const LogoutButton = () => {
  return <Button onClick={() => logout()}>Logout</Button>;
};
