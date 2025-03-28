import { createContext, useContext, type ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const context = <THook extends (...args: any[]) => any>(useHook: THook) => {
  type THookProps = Parameters<THook>[0] extends undefined
    ? object
    : Parameters<THook>[0] extends object
    ? Parameters<THook>[0]
    : never;
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
