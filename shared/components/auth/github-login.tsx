'use client';

import { login } from '@/shared/lib/auth-client';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';

export const GitHubLogin = () => {
  return (
    <Button className="w-full" onClick={() => login('github')}>
      <p>GitHub</p>
      <FaGithub />
    </Button>
  );
};
