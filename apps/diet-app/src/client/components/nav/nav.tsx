import React from 'react';
import { Profile } from '../icons/icons';

export default function Nav() {
  return (
    <nav>
      <div className="flex justify-between my-2">
        <h1 className="text-2xl font-bold ">It's time for breakfast!</h1>

        <div>
          <Profile />
        </div>
      </div>
    </nav>
  );
}
