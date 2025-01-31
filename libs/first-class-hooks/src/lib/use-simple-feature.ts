import React, { useMemo } from 'react';
import type { Setter, SimpleFeature, SimpleFeatureState } from './defs';

const useSimpleFeature = (
  defaultState: Setter<SimpleFeatureState> = false
): SimpleFeature => {
  const initState = React.useRef(defaultState);
  const [isOn, setIsOn] = React.useState(defaultState);

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
        setIsOn(initState.current);
      },
    }),
    [isOn]
  );
};

export { useSimpleFeature };
