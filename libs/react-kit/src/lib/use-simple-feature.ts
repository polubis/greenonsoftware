import { useMemo, useState } from 'react';
import type { Setter, SimpleFeature, SimpleFeatureState } from './defs';

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
