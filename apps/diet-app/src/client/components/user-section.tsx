'use client';

import { useAuthContext } from '../auth-provider';

export const UserSection = () => {
  const auth = useAuthContext();

  if (auth.is === `idle`) return <div>Authorizing</div>;

  return auth.is === `authorized` ? (
    <div>Authorized {auth.user.displayName}</div>
  ) : (
    <div>unauthorized</div>
  );
};
