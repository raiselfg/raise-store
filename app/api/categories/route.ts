import prisma from "@/shared/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await prisma.category.findMany();
  return NextResponse.json(response);
}
