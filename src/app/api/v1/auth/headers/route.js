import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export function GET() {
  const headersList = headers();

  const bearerToken = headersList.get('Authorization');
  const token = bearerToken.split(' ')[1];

  if (token !== 'sfsfsffshshshs') {
    return NextResponse.json({ message: 'Unauthorize' }, { status: 403 });
  }

  return NextResponse.json({ message: 'Data Resources User' }, { status: 200 });
}
