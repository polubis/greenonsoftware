import { renderHook, act } from '@testing-library/react';
import { useSimpleFeature } from '../use-simple-feature';

describe(useSimpleFeature.name, () => {
  it('should be off by default', () => {
    const { result } = renderHook(() => useSimpleFeature());
    expect(result.current.isOn).toBe(false);
    expect(result.current.isOff).toBe(true);
  });

  it('should assign passed visibility as initial', () => {
    const { result } = renderHook(() => useSimpleFeature(true));
    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);
  });

  it('should assign passed visibility setter as initial', () => {
    const { result } = renderHook(() => useSimpleFeature(() => true));
    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);

    act(() => {
      result.current.off();
    });

    expect(result.current.isOn).toBe(false);
    expect(result.current.isOff).toBe(true);

    act(() => {
      result.current.reset();
    });

    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);
  });

  it('should turn on the feature', () => {
    const { result } = renderHook(() => useSimpleFeature());
    act(() => {
      result.current.on();
    });
    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);
  });

  it('should turn off the feature', () => {
    const { result } = renderHook(() => useSimpleFeature(true));
    act(() => {
      result.current.off();
    });
    expect(result.current.isOn).toBe(false);
    expect(result.current.isOff).toBe(true);
  });

  it('should toggle the feature', () => {
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

  it('should reset to the initial visibility', () => {
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

  it('should allow to override', () => {
    const { result } = renderHook(() => useSimpleFeature());
    act(() => {
      result.current.set(true);
    });
    expect(result.current.isOn).toBe(true);
  });
});
