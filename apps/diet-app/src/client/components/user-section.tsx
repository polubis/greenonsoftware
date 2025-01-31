'use client';

import { useAuthContext } from '../auth-provider';
import { useSimpleFeature } from '@greenonsoftware/first-class-hooks';

export const UserSection = () => {
  const feature = useSimpleFeature();

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
        <button
          onClick={async () => {
            const token = await auth.user.getIdToken();
            await fetch('/api/test', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            });
            feature.on();
          }}
        >
          Call endpoint
        </button>
      </div>
    );
  }

  return <div>{content}</div>;
};
