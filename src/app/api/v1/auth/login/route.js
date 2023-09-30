import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const findUser = await prisma.member.findUnique({
      where: {
        email,
      },
    });

    if (!findUser) {
      return NextResponse.json({ message: 'User not found' });
    }
    // Compared Password
    const hashedPassowrd = findUser.password;
    const isPasswordValid = await bcrypt.compare(password, hashedPassowrd);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid Email and Password' }, { status: 400 });
    }
    const payload = {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
    };

    const accessToken = sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '3d' });
    const res = NextResponse.json({ accessToken, data: payload, message: 'User Login Success' });
    res.cookies.set('token', accessToken);
    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
