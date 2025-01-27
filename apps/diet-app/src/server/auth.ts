import { getApp } from './app';

function getToken(request: Request) {
  return request.headers.get('Authorization')?.split('Bearer ')[1];
}

export async function authenticate(request: Request) {
  const token = getToken(request);

  if (!token) {
    throw Error(`Access denied`);
  }

  try {
    return getApp().auth().verifyIdToken(token);
  } catch {
    throw Error(`Access denied`);
  }
}
