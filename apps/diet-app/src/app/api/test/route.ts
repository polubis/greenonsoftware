import { NextResponse } from 'next/server';
import { authenticate } from '../../../server/auth';

export async function POST(request: Request): Promise<Response> {
  authenticate(request);

  try {
    const { data } = await request.json();

    console.log('Received data:', data);

    return new NextResponse(
      JSON.stringify({ message: 'Data successfully received', data }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: 'Error processing the request',
        error: (error as Error).message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
