import { type ReactNode, useContext, createContext, useMemo } from 'react';

type ProviderProps<TState> = {
  children: ReactNode;
} & (TState extends undefined
  ? object
  : {
      initialState: TState;
    });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const context = <TValueHook extends (...args: any[]) => any>(
  useValueHook: TValueHook
) => {
  type TContextValue = ReturnType<TValueHook>;
  type State = Parameters<TValueHook>[0];

  const DynamicContext = createContext<TContextValue | null>(null);

  const DynamicProvider = (props: ProviderProps<State>) => {
    const value = useValueHook((props as ProviderProps<unknown>)?.initialState);
    const memoizedValue = useMemo(() => value, [value]);

    return (
      <DynamicContext.Provider value={memoizedValue}>
        {props.children}
      </DynamicContext.Provider>
    );
  };

  const useDynamicContext = (): TContextValue => {
    const ctx = useContext(DynamicContext);

    if (!ctx)
      throw new Error('Missing provider at the top of the component tree');

    return ctx;
  };

  return [DynamicProvider, useDynamicContext] as const;
};

export { context };

// // 1. Without props
// const [CounterProvider, useCounterContext] = context(() => {
//   const [counter, setCounter] = useState();

//   return { counter, setCounter };
// });

// // 2. With props
// const [CounterProvider, useCounterContext] = context(
//   ({ initialCounter }: { initialCounter: number }) => {
//     const [counter, setCounter] = useState(initialCounter);

//     return { counter, setCounter };
//   }
// );

// // 3. With props that overrides -> omits children: string
// const [CounterProvider, useCounterContext] = context(
//   ({ initialCounter }: { initialCounter: number; children: string }) => {
//     const [counter, setCounter] = useState(initialCounter);

//     return { counter, setCounter };
//   }
// );

// <CounterProvider initialCounter={10}>
//   <div></div>
// </CounterProvider>;
