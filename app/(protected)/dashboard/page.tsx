import { auth } from '@/auth';
import { LogoutButton } from '@/shared/components/auth/logout-button';
import { Container } from '@/shared/components/ui/container';
import { redirect } from 'next/navigation';
import prisma from '@/shared/lib/prisma';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';
import { Avatar, AvatarImage } from '@/shared/components/ui/avatar';

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/login');
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      sessions: {
        orderBy: { expires: 'desc' },
      },
      accounts: true,
    },
  });

  if (!user) {
    redirect('/auth/login');
  }

  const hasPassword = !!user.password;

  return (
    <Container className="py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        </div>

        <div>
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={user.image || ''} />
                  </Avatar>
                </div>
                <CardTitle className="text-xl">
                  {user.name || 'Пользователь'}
                </CardTitle>
                <CardDescription className="flex flex-col items-center gap-1 mt-1">
                  <p>email: {user.email}</p>
                  <p>name: {user.name}</p>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <LogoutButton />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}
