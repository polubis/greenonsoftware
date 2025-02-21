import { renderHook, act } from '@testing-library/react';
import { useFeature } from './use-feature';

describe(useFeature.name, () => {
  it('allows to set data', () => {
    type User = { id: number };
    const { result } = renderHook(() => useFeature<User>());

    expect(result.current).toEqual(expect.objectContaining({ is: 'off' }));

    act(() => {
      result.current.on({ id: 0 });
    });

    expect(result.current).toEqual(
      expect.objectContaining({ is: 'on', data: { id: 0 } })
    );
  });

  it('sets initial visibility from calculation result', () => {
    const { result } = renderHook(() => useFeature(() => ({ is: `off` })));

    expect(result.current).toEqual(expect.objectContaining({ is: 'off' }));
  });

  it('is off by default', () => {
    const { result } = renderHook(() => useFeature());
    expect(result.current).toEqual(expect.objectContaining({ is: 'off' }));
  });

  it('resets to initial state', () => {
    const { result } = renderHook(() => useFeature({ is: 'on', data: 42 }));

    expect(result.current).toEqual(
      expect.objectContaining({ is: 'on', data: 42 })
    );

    act(() => {
      result.current.off();
    });

    expect(result.current).toEqual(expect.objectContaining({ is: 'off' }));

    act(() => {
      result.current.reset();
    });

    expect(result.current).toEqual(
      expect.objectContaining({ is: 'on', data: 42 })
    );
  });

  it('turns on the feature', () => {
    const { result } = renderHook(() => useFeature());

    act(() => {
      result.current.on(100);
    });

    expect(result.current).toEqual(
      expect.objectContaining({ is: 'on', data: 100 })
    );
  });

  it('turns off the feature', () => {
    const { result } = renderHook(() => useFeature({ is: 'on', data: 42 }));

    act(() => {
      result.current.off();
    });

    expect(result.current).toEqual(expect.objectContaining({ is: 'off' }));
  });

  it('allows to override', () => {
    const { result } = renderHook(() => useFeature());

    act(() => {
      result.current.set({ is: 'on', data: 'hello' });
    });

    expect(result.current).toEqual(
      expect.objectContaining({ is: 'on', data: 'hello' })
    );
  });
});
