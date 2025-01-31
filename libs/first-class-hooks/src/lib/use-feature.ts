import React, { useMemo } from 'react';
import { Feature, FeatureState, Setter } from './defs';

const useFeature = <TData>(
  defaultState: Setter<FeatureState<TData>> = { is: `off` }
): Feature<TData> => {
  const [initState] = React.useState(defaultState);
  const [state, setState] = React.useState(initState);

  return useMemo(
    () => ({
      ...state,
      on: (data: TData) => {
        setState({ is: `on`, data });
      },
      set: setState,
      off: () => {
        setState({ is: `off` });
      },
      reset: () => {
        setState(initState);
      },
    }),
    [state, initState]
  );
};

export { useFeature };
