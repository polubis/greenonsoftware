import { NextResponse } from 'next/server';
import { authenticate } from '../../../server/auth';

export async function POST(request: Request): Promise<Response> {
  authenticate(request);

  return new NextResponse(
    JSON.stringify({ message: 'Data successfully received', data: null }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
