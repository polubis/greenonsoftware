import { createContext, useContext, type ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const context = <THook extends (...args: any[]) => any>(useHook: THook) => {
  type THookFirstParam = Parameters<THook>[0];
  type THookProps = THookFirstParam extends undefined
    ? object
    : THookFirstParam extends object
    ? THookFirstParam
    : `ERROR: The hook must accept single object as an argument or no arguments at all`;
  type THookReturn = ReturnType<THook>;

  const DynamicContext = createContext<THookReturn | null>(null);

  const DynamicProvider = ({
    children,
    ...props
  }: THookProps & {
    children: ReactNode;
  }) => {
    const value = useHook(props);

    return (
      <DynamicContext.Provider value={value}>
        {children}
      </DynamicContext.Provider>
    );
  };

  const useDynamicContext = (): THookReturn => {
    const ctx = useContext(DynamicContext);

    if (!ctx)
      throw new Error('Missing provider at the top of the component tree');

    return ctx;
  };

  return [DynamicProvider, useDynamicContext] as const;
};

export { context };
