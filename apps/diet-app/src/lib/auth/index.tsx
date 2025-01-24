'use client';

import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  type User,
} from 'firebase/auth';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

const app =
  getApps()[0] ??
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
  });

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const logInViaGoogle = async () => {
  return signInWithPopup(auth, googleAuthProvider);
};

const logInViaForm = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return signInWithEmailAndPassword(auth, email, password);
};

type AuthContextState = {
  user: User | null;
};

const Ctx = createContext<AuthContextState | null>(null);

const useAuth = () => {
  const [state, setState] = useState<AuthContextState>({ user: null });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setState({ user });
    });

    return () => unsubscribe();
  }, []);

  return [state] as const;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state] = useAuth();

  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
};

export const useAuthContext = () => {
  const ctx = useContext(Ctx);

  if (!ctx)
    throw Error(`Lack of AuthProvider at the top of components structure`);

  return ctx;
};
