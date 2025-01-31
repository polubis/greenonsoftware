import { renderHook, act } from '@testing-library/react';
import { useSimpleFeature } from '../use-simple-feature';

describe(`${useSimpleFeature.name}`, () => {
  it('should return the correct initial state (default false)', () => {
    const { result } = renderHook(() => useSimpleFeature());
    expect(result.current.isOn).toBe(false);
    expect(result.current.isOff).toBe(true);
  });

  it('should return the correct initial state when provided a default state', () => {
    const { result } = renderHook(() => useSimpleFeature(true));
    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);
  });

  it('should turn on the feature when calling on()', () => {
    const { result } = renderHook(() => useSimpleFeature());
    act(() => {
      result.current.on();
    });
    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);
  });

  it('should turn off the feature when calling off()', () => {
    const { result } = renderHook(() => useSimpleFeature(true));
    act(() => {
      result.current.off();
    });
    expect(result.current.isOn).toBe(false);
    expect(result.current.isOff).toBe(true);
  });

  it('should toggle the state when calling toggle()', () => {
    const { result } = renderHook(() => useSimpleFeature());
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOn).toBe(true);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOn).toBe(false);
  });

  it('should reset to the initial state when calling reset()', () => {
    const { result } = renderHook(() => useSimpleFeature(true));
    act(() => {
      result.current.off();
    });
    expect(result.current.isOn).toBe(false);
    act(() => {
      result.current.reset();
    });
    expect(result.current.isOn).toBe(true);
  });

  it('should allow setting the state directly', () => {
    const { result } = renderHook(() => useSimpleFeature());
    act(() => {
      result.current.set(true);
    });
    expect(result.current.isOn).toBe(true);
  });
});
