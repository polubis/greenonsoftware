import { renderHook, act } from '@testing-library/react';
import { useSimpleFeature } from './use-simple-feature';

describe(useSimpleFeature.name, () => {
  it('is off by default', () => {
    const { result } = renderHook(() => useSimpleFeature());
    expect(result.current.isOn).toBe(false);
    expect(result.current.isOff).toBe(true);
  });

  it('assigns passed visibility value as initial', () => {
    const { result } = renderHook(() => useSimpleFeature(true));
    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);
  });

  it('assigns passed visibility function as initial', () => {
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

  it('turns on the feature', () => {
    const { result } = renderHook(() => useSimpleFeature());
    act(() => {
      result.current.on();
    });
    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);
  });

  it('turns off the feature', () => {
    const { result } = renderHook(() => useSimpleFeature(true));
    act(() => {
      result.current.off();
    });
    expect(result.current.isOn).toBe(false);
    expect(result.current.isOff).toBe(true);
  });

  it('toggles the feature', () => {
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

  it('resets to the initial visibility', () => {
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

  it('allows to override', () => {
    const { result } = renderHook(() => useSimpleFeature());
    act(() => {
      result.current.set(true);
    });
    expect(result.current.isOn).toBe(true);
  });
});
