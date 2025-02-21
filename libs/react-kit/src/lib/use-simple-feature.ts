import { useMemo, useState } from 'react';

type Setter<TState> = TState | (() => TState);

const useSimpleFeature = (defaultState: Setter<boolean> = false) => {
  const [initState] = useState(defaultState);
  const [isOn, setIsOn] = useState(initState);

  return useMemo(
    () => ({
      isOff: !isOn,
      isOn,
      set: setIsOn,
      on: () => setIsOn(true),
      off: () => setIsOn(false),
      toggle: () => setIsOn((prevIsOpen) => !prevIsOpen),
      reset: () => setIsOn(initState),
    }),
    [isOn, initState]
  );
};

export { useSimpleFeature };
