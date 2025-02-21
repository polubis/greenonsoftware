import { useState, useMemo } from 'react';

type Setter<TState> = TState | (() => TState);

type FeatureOnState<TData> = { is: `on`; data: TData };
type FeatureOffState = { is: `off` };

type FeatureState<TData> = FeatureOnState<TData> | FeatureOffState;

const useFeature = <TData>(
  defaultState: Setter<FeatureState<TData>> = { is: `off` }
) => {
  const [initState] = useState(defaultState);
  const [state, setState] = useState(initState);

  return useMemo(
    () => ({
      ...state,
      on: (data: TData) => setState({ is: `on`, data }),
      set: setState,
      off: () => setState({ is: `off` }),
      reset: () => setState(initState),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );
};

export { useFeature };
