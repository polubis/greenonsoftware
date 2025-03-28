import { renderHook, act } from '@testing-library/react';
import { context } from './context';
import { ReactNode, useState } from 'react';

describe(context.name, () => {
  // it('displays error when invalid hook argument passed', () => {
  //   const [Provider] = context((counter: number) => undefined);

  //   <Provider counter={12}>div</Provider>
  // });

  it('provides the correct context value', () => {
    const useTestHook = () => useState(0);
    const [TestProvider, useTestContext] = context(useTestHook);

    const { result } = renderHook(() => useTestContext(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <TestProvider>{children}</TestProvider>
      ),
    });

    const [value] = result.current;

    expect(value).toBe(0);
  });

  it('allows to set to initial props based on the hook signature', () => {
    const useTestHook = ({ counter }: { counter: number }) => useState(counter);
    const [TestProvider, useTestContext] = context(useTestHook);

    const { result } = renderHook(() => useTestContext(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <TestProvider counter={12}>{children}</TestProvider>
      ),
    });

    const [value] = result.current;

    expect(value).toBe(12);
  });

  it('updates the context value', () => {
    const useTestHook = () => useState(0);
    const [TestProvider, useTestContext] = context(useTestHook);

    const { result } = renderHook(() => useTestContext(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <TestProvider>{children}</TestProvider>
      ),
    });

    act(() => {
      const [, setValue] = result.current;
      setValue(1);
    });

    const [value] = result.current;

    expect(value).toBe(1);
  });

  it('managing and updating counter inside provider', () => {
    const useCounterHook = () => {
      const [counter, setCounter] = useState(0);
      return { counter, setCounter };
    };

    const [CounterProvider, useCounterContext] = context(useCounterHook);

    const { result } = renderHook(() => useCounterContext(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <CounterProvider>{children}</CounterProvider>
      ),
    });

    expect(result.current.counter).toBe(0);

    act(() => {
      result.current.setCounter(1);
    });

    expect(result.current.counter).toBe(1);

    act(() => {
      result.current.setCounter(2);
    });

    expect(result.current.counter).toBe(2);
  });

  it('throws an error when used outside of a provider', () => {
    const useTestHook = () => useState(0);
    const [, useTestContext] = context(useTestHook);

    expect(() => renderHook(() => useTestContext())).toThrow(
      'Missing provider at the top of the component tree'
    );
  });
});
