'use client'

import { login } from '@/shared/lib/auth-client'
import { Button } from '../ui/button'

export const GitHubLogin = () => {
  return <Button onClick={() => login('github')}>login with GutHub</Button>
}
