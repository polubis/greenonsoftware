import { NextResponse } from 'next/server';
import { authenticate } from '../../../server/auth';
import { app } from '../../../server/app';

export async function POST(request: Request): Promise<Response> {
  try {
    await authenticate(request);

    const data = (
      await app().firestore().collection(`test`).doc(`dasdsdasda`).get()
    ).data();

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
