import { auth } from '@/auth';
import prisma from '@/shared/lib/prisma';
import { NextResponse } from 'next/server';

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

  const response = NextResponse.json({
    authenticated: true,
    user,
  });

  response.headers.set(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=60'
  );

  return response;
}
