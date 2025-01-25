'use client';

import { useAuthContext } from '../auth-provider';

export const UserSection = () => {
  const auth = useAuthContext();

  let content = <div>Authorizing</div>;

  if (auth.is === `unauthorized`) {
    content = (
      <div>
        unauthorized
        <button onClick={auth.logInViaGoogle}>Log In</button>
      </div>
    );
  } else if (auth.is === `authorized`) {
    content = (
      <div>
        Authorized {auth.user.displayName}{' '}
        <button onClick={auth.logOut}>Log Out</button>
      </div>
    );
  }

  return <div>{content}</div>;
};
