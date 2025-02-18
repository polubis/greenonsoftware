import { useMemo, useState } from 'react';

type Setter<TState> = TState | (() => TState);

type SimpleFeatureState = boolean;
type SimpleFeatureActions = {
  on(): void;
  off(): void;
  toggle(): void;
  reset(): void;
  set(setter: Setter<SimpleFeatureState>): void;
};
type SimpleFeature = SimpleFeatureActions & {
  isOff: boolean;
  isOn: boolean;
};

const useSimpleFeature = (
  defaultState: Setter<SimpleFeatureState> = false
): SimpleFeature => {
  const [initState] = useState(defaultState);
  const [isOn, setIsOn] = useState(initState);

  return useMemo(
    () => ({
      isOff: !isOn,
      isOn,
      set: setIsOn,
      on: () => {
        setIsOn(true);
      },
      off: () => {
        setIsOn(false);
      },
      toggle: () => {
        setIsOn((prevIsOpen) => !prevIsOpen);
      },
      reset: () => {
        setIsOn(initState);
      },
    }),
    [isOn, initState]
  );
};

export { useSimpleFeature };
