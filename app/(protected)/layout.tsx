import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect('/auth/login');

  // просто возвращаем children, не трогаем HTML/body/theme
  return <>{children}</>;
}
