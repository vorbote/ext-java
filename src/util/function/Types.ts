type Supplier<T> = () => Nullable<T>
type Consumer<T> = (param: Nullable<T>) => void
type Func<T, R> = (value: Nullable<T>) => Nullable<R>
type Predict<T> = (param: Nullable<T>) => boolean
type Runnable = () => void