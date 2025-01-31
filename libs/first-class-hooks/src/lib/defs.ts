export type Setter<TState> = TState | (() => TState);

// use-simple-feature
export type SimpleFeatureState = boolean;
export type SimpleFeatureActions = {
  on(): void;
  off(): void;
  toggle(): void;
  reset(): void;
  set(setter: Setter<SimpleFeatureState>): void;
};
export type SimpleFeature = SimpleFeatureActions & {
  isOff: boolean;
  isOn: boolean;
};
