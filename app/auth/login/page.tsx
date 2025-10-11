import { GitHubLogin } from '@/shared/components/auth/github-login'
import { Container } from '@/shared/components/ui/container'

export default function LoginPage() {
  return (
    <Container>
      <GitHubLogin />
    </Container>
  )
}
