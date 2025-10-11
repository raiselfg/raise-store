'use client';

import { LogoutButton } from '@/shared/components/auth/logout-button';
import { Container } from '@/shared/components/ui/container';
import { useSessionUser } from '@/shared/hooks/useSessionUser';

export default function DashboardPage() {
  const { user, authenticated, loading } = useSessionUser();

  return (
    <Container>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <h2 className="mb-4 text-xl font-semibold">
            Добро пожаловать, {user?.name || 'Пользователь'}!
          </h2>

          <ul className="text-foreground space-y-1">
            <li>Email: {user?.email}</li>
            <li>
              Аккаунт создан: {new Date(user?.createdAt || '').toLocaleString()}
            </li>
            <li>ID: {user?.id}</li>
          </ul>
          <LogoutButton />
        </>
      )}
    </Container>
  );
}
