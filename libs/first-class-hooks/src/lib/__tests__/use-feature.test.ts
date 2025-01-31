import { renderHook, act } from '@testing-library/react';
import { useFeature } from '../use-feature';

describe(`${useFeature.name}`, () => {
  it('should return the correct initial state (default off)', () => {
    const { result } = renderHook(() => useFeature());
    expect(result.current).toEqual(expect.objectContaining({ is: 'off' }));
  });

  it('should return the correct initial state when provided a default state', () => {
    const { result } = renderHook(() => useFeature({ is: 'on', data: 42 }));
    expect(result.current).toEqual(
      expect.objectContaining({ is: 'on', data: 42 })
    );
  });

  it('should turn on the feature with provided data when calling on()', () => {
    const { result } = renderHook(() => useFeature());
    act(() => {
      result.current.on(100);
    });
    expect(result.current).toEqual(
      expect.objectContaining({ is: 'on', data: 100 })
    );
  });

  it('should turn off the feature when calling off()', () => {
    const { result } = renderHook(() => useFeature({ is: 'on', data: 42 }));
    act(() => {
      result.current.off();
    });
    expect(result.current).toEqual(expect.objectContaining({ is: 'off' }));
  });

  it('should reset to the initial state when calling reset()', () => {
    const { result } = renderHook(() => useFeature({ is: 'on', data: 99 }));
    act(() => {
      result.current.off();
    });
    expect(result.current).toEqual(expect.objectContaining({ is: 'off' }));
    act(() => {
      result.current.reset();
    });
    expect(result.current).toEqual(
      expect.objectContaining({ is: 'on', data: 99 })
    );
  });

  it('should allow setting the state directly', () => {
    const { result } = renderHook(() => useFeature());
    act(() => {
      result.current.set({ is: 'on', data: 'hello' });
    });
    expect(result.current).toEqual(
      expect.objectContaining({ is: 'on', data: 'hello' })
    );
  });

  it('should handle object structures as data correctly', () => {
    const initialData = { key: 'value', nested: { num: 42 } };
    const { result } = renderHook(() => useFeature());
    act(() => {
      result.current.on(initialData);
    });
    expect(result.current).toEqual(
      expect.objectContaining({ is: 'on', data: initialData })
    );
  });
});
