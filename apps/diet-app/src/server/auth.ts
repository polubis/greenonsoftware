import { NextResponse } from 'next/server';

function getToken(request: Request) {
  const token = request.headers.get('Authorization')?.split('Bearer ')[1];
  return token;
}

export function authenticate(request: Request) {
  const token = getToken(request);

  if (!token) {
    return new NextResponse(
      JSON.stringify({
        message: 'Access blocked',
        error: `Resource access blocked`,
      }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
