import { type ReactNode, useContext, createContext, useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const context = <TValueHook extends () => any>(useValueHook: TValueHook) => {
  type TContextValue = ReturnType<TValueHook>;

  const Context = createContext<TContextValue | null>(null);

  Context.displayName = 'CustomContext';

  const Provider = ({ children }: { children: ReactNode }) => {
    const value = useValueHook();
    const memoizedValue = useMemo(() => value, [value]);

    return (
      <Context.Provider value={memoizedValue}>{children}</Context.Provider>
    );
  };

  const useCustomContext = (): TContextValue => {
    const ctx = useContext(Context);

    if (!ctx)
      throw new Error('Missing provider at the top of the component tree');

    return ctx;
  };

  return [Provider, useCustomContext] as const;
};

export { context };
