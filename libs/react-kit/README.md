# @greenonsoftware/react-kit

A collection of first-class React hooks to enhance your application's functionality with minimal setup.

## Installation

You can install the package using npm or yarn:

```bash
npm install @greenonsoftware/react-kit
```

or

```bash
yarn add @greenonsoftware/react-kit
```

## 1. `useSimpleFeature` - show/hide UI and manage simple features

This hook provides a simple way to manage a boolean state with easy-to-use functions to toggle, set, or reset the state.

```tsx
import { useSimpleFeature } from '@greenonsoftware/react-kit';

const MyComponent = (props: { flag: boolean }) => {
  const modal = useSimpleFeature();
  // or with initial state
  const modal = useSimpleFeature(true);
  // or with the result as complex initial calculations
  const modal = useSimpleFeature(calculateFlag);
  // or based on the properties from component
  const modal = useSimpleFeature(() => props.flag);

  return (
    <div>
      <p>Status: {modal.isOn ? 'On' : 'Off'}</p>
      <button onClick={modal.toggle}>Toggle</button>
      <button onClick={modal.on}>Turn On</button>
      <button onClick={modal.off}>Turn Off</button>
      <button onClick={modal.reset}>Reset</button>
    </div>
  );
};
```

### Parameters

- `defaultState` _(optional)_ - A function or value to initialize the state. Default is `false`.

## 2. `useFeature` - Manage feature state with additional data

This hooks is enhanced version of `useSimpleFeature`. In addition, it allows you to store `data`
that is determined by generic parameter.

```tsx
import { useFeature } from '@greenonsoftware/react-kit';

type UserConfig = { id: number };

const MyComponent = () => {
  const feature = useFeature<UserConfig>();
  const feature = useFeature();
  // or with initial state
  const feature = useFeature({ is: 'on', data: 42 });
  // or dynamically
  const feature = useFeature(() => ({ is: 'off' }));

  if (feature.is === `on`) {
    // Data is only available when feature is "on".
    console.log(feature.data);
  }

  return (
    <div>
      <p>Accessing data not allowed without proper check 💢: {feature.data}</p>
      <p>Feature state: {feature.is}</p>
      <button onClick={() => feature.on(100)}>Turn On with Data</button>
      <button onClick={feature.off}>Turn Off</button>
      <button onClick={feature.reset}>Reset</button>
    </div>
  );
};
```

### Parameters

- `defaultState` _(optional)_ - A function or value to initialize the state. Default is `{ is: 'off' }`.

## 3. `context` - Create Memoized Contexts with Zero Boilerplate

> This mechanism follows best practices described in this article: [Common Mistakes in Using React Context API](https://greenonsoftware.com/articles/react/common-mistakes-in-using-react-context-api/).

You can create a context more easily based on specific conditions using the following API—all strongly typed.

```tsx
// @@@ user.context.tsx @@@
import { useState } from 'react';
import { context } from '@greenonsoftware/react-kit';

// Passing a hook to define logic and return a value
const [UserProvider, useUserContext] = context(() => {
  const [counter, setCounter] = useState(0);

  return { counter, setCounter };
});

// Exporting the provider for use in the app
export { UserProvider, useUserContext };

// @@@ app.tsx @@@
import React from 'react';
import { UserProvider, useUserContext } from './user.context';

const UserView = () => {
  // Strongly typed
  const { counter, setCounter } = useUserContext();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(10)}>Increment</button>
    </div>
  );
};

const ConnectedUserView = () => (
  <UserProvider>
    <UserView />
  </UserProvider>
);
```

If you want to pass an initial state, you can do so as follows:

```tsx
// @@@ user.context.tsx @@@
import { useState } from 'react';
import { context } from '@greenonsoftware/react-kit';

// Assigning the value passed from "UserProvider"
const [UserProvider, useUserContext] = context((initialCount: number) => {
  const [counter, setCounter] = useState(initialCount);

  return { counter, setCounter };
});

// @@@ app.tsx @@@
import React from 'react';
import { UserProvider, useUserContext } from './user.context';

const UserView = () => {
  const { counter, setCounter } = useUserContext();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(10)}>Increment</button>
    </div>
  );
};

const ConnectedUserView = () => (
  // Passing an initial state
  // may be also on server side, ...etc
  <UserProvider initialState={12}>
    <UserView />
  </UserProvider>
);
```

### Parameters

- `useValueHook` _(required)_ – A hook that defines the logic and returns the **context value** to be propagated. This hook accepts an **optional parameter** as a callback. If specified, you must provide the `initialState` property when rendering.

### License

MIT License
