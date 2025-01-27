import admin from 'firebase-admin';

function formatPrivateKey(key: string) {
  return key.replace(/\\n/g, '\n');
}

export function app() {
  const params = {
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: formatPrivateKey(process.env.FIREBASE_PRIVATE_KEY ?? ``),
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  } as const;

  if (
    !params.clientEmail ||
    !params.privateKey ||
    !params.privateKey ||
    !params.storageBucket
  ) {
    throw Error(`Lack of setup for firebase connection`);
  }

  if (admin.apps.length > 0) {
    return admin.app();
  }

  const credential = admin.credential.cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey: params.privateKey,
  });

  return admin.initializeApp({
    credential,
    projectId: params.projectId,
    storageBucket: params.storageBucket,
  });
}
