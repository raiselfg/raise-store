import { GitHubLogin } from '@/shared/components/auth/github-login';
import { Container } from '@/shared/components/ui/container';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { CredentialsForm } from '@/shared/components/auth/credentials-form';

export default function LoginPage() {
  return (
    <Container>
      <Card className="w-xl absolute top-[50%] left-[50%] translate-[-50%]">
        <CardHeader>
          <CardTitle>Авторизация пользователя</CardTitle>
          <CardDescription>Войдите удобным для вас способом</CardDescription>
        </CardHeader>
        <CardContent>
          <CredentialsForm />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <GitHubLogin />
        </CardFooter>
      </Card>
    </Container>
  );
}
