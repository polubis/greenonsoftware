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

### License

MIT License