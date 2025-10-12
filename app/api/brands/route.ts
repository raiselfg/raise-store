import prisma from "@/shared/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await prisma.brand.findMany();
  return NextResponse.json(response);
}
