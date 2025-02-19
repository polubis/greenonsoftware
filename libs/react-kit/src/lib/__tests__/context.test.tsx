import { renderHook, act } from '@testing-library/react';
import { context } from '../context';
import { ReactNode, useState } from 'react';

describe('context', () => {
  it('should provide the correct context value', () => {
    const useTestHook = () => useState(0);
    const [TestProvider, useTestContext] = context(useTestHook);

    const { result } = renderHook(() => useTestContext(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <TestProvider>{children}</TestProvider>
      ),
    });

    expect(result.current).toEqual([0, expect.any(Function)]);
  });

  it('should update the context value correctly', () => {
    const useTestHook = () => useState(0);
    const [TestProvider, useTestContext] = context(useTestHook);

    const { result } = renderHook(() => useTestContext(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <TestProvider>{children}</TestProvider>
      ),
    });

    act(() => {
      result.current[1](1);
    });

    expect(result.current).toEqual([1, expect.any(Function)]);
  });

  it('should correctly manage and update the counter inside the provider', () => {
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

  it('should throw an error when used outside of a provider', () => {
    const useTestHook = () => useState(0);
    const [, useTestContext] = context(useTestHook);

    expect(() => renderHook(() => useTestContext())).toThrow(
      'Missing provider at the top of the component tree'
    );
  });
});
