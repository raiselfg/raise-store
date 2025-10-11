import { auth } from '@/auth';
import prisma from '@/shared/lib/prisma';

export async function GET() {
  const session = await auth();

  if (!session || !session.user?.id) {
    return Response.json({ authenticated: false, user: null }, { status: 200 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      accounts: true,
      sessions: true,
    },
  });

  if (!user) {
    return Response.json({ authenticated: false, user: null }, { status: 200 });
  }

  return Response.json({
    authenticated: true,
    user,
  });
}
