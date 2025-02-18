import React, { useMemo } from 'react';

type Setter<TState> = TState | (() => TState);

type FeatureOnState<TData> = { is: `on`; data: TData };
type FeatureOffState = { is: `off` };

type FeatureState<TData> = FeatureOnState<TData> | FeatureOffState;
type FeatureActions<TData> = {
  on(data: TData): void;
  off(): void;
  reset(): void;
  set(setter: Setter<FeatureState<TData>>): void;
};
type Feature<TData> = FeatureState<TData> & FeatureActions<TData>;

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
