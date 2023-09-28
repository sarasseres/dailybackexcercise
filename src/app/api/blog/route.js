import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET() {
  const blogData = await prisma.blog.findMany();
  return NextResponse.json({ data: blogData, message: 'hello world' }, { status: 200 });
}
