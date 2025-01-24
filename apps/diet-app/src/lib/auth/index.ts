import { initializeApp, getApps } from 'firebase/app';
import {
  type CompleteFn,
  type ErrorFn,
  getAuth,
  GoogleAuthProvider,
  type NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  type User,
} from 'firebase/auth';

const app =
  getApps()[0] ??
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASURMENT_ID,
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

const onAuthChange = (
  nextOrObserver: NextOrObserver<User>,
  error?: ErrorFn,
  completed?: CompleteFn
) => onAuthStateChanged(auth, nextOrObserver, error, completed);

const useAuth = () => {};

export { useAuth };
