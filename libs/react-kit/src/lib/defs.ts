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

// use-feature
export type FeatureOnState<TData> = { is: `on`; data: TData };
export type FeatureOffState = { is: `off` };

export type FeatureState<TData> = FeatureOnState<TData> | FeatureOffState;
export type FeatureActions<TData> = {
  on(data: TData): void;
  off(): void;
  reset(): void;
  set(setter: Setter<FeatureState<TData>>): void;
};
export type Feature<TData> = FeatureState<TData> & FeatureActions<TData>;
