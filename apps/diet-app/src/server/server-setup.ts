'use server';

import admin from 'firebase-admin';

const getFirebaseAdmin = () => {
  if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    throw new Error('Firebase service account key is missing');
  }

  if (admin.apps.length === 0) {
    try {
      const serviceAccount = JSON.parse(
        process.env.FIREBASE_SERVICE_ACCOUNT_KEY
      );

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } catch {
      throw new Error('Failed to initialize Firebase Admin');
    }
  }

  return admin;
};

export const auth = () => getFirebaseAdmin().auth();
export const db = () => getFirebaseAdmin().firestore();
