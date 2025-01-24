'use client';

import { useAppAuthContext } from '../app-auth-provider';

export const UserSection = () => {
  const auth = useAppAuthContext();

  if (auth.is === `idle`) return <div>Authorizing</div>;

  return auth.is === `authorized` ? (
    <div>Authorized {auth.user.displayName}</div>
  ) : (
    <div>unauthorized</div>
  );
};
