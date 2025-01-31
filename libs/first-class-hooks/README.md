# @greenonsoftware/first-class-hooks

A collection of first-class React hooks to enhance your application's functionality with minimal setup.

## Installation

You can install the package using npm or yarn:

```bash
npm install @greenonsoftware/first-class-hooks
```

or

```bash
yarn add @greenonsoftware/first-class-hooks
```

## 1. `useSimpleFeature` - show/hide UI and manage simple features

This hook provides a simple way to manage a boolean state with easy-to-use functions to toggle, set, or reset the state.

```tsx
import { useSimpleFeature } from '@greenonsoftware/first-class-hooks';

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
import { useFeature } from '@greenonsoftware/first-class-hooks';

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

### License

MIT License
