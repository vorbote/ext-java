import {NoSuchElementException} from "../exceptions/NoSuchElementException";

/**
 * A container object which may or may not contain a non-null value.
 * If a value is present, <code>isPresent()</code> will return <code>true</code> and
 * <code>get()</code> will return the value.
 *
 * <p>Additional methods that depend on the presence or absence of a contained
 * value are provided, such as {@link #orElse(T)}
 * (return a default value if value not present) and
 * {@link #ifPresent(callback)} (execute a block
 * of code if the value is present).
 *
 * <p>This is a value-based class; use of identity-sensitive operations
 * (including reference equality (<code>==</code>), identity hash code,
 * or synchronization) on instances of <code>Optional</code> may have
 * unpredictable results and should be avoided.
 */
export class Optional<T> {

  private static readonly EMPTY: Optional<any> = new Optional<any>();
  private readonly value: T | null

  private constructor(value?: T) {
    if (value) {
      this.value = value
    } else
      this.value = null
  }

  /**
   * Returns an empty Optional instance.  No value is present for this
   * Optional.
   *
   * @return an empty Optional
   */
  public static empty<T>() {
    return this.EMPTY
  }

  /**
   * Returns an Optional with the specified present non-null value.
   *
   * @param value the value to be present, which must be non-null
   * @return an {@code Optional} with the value present
   * @throws NullPointerException if value is null
   */
  public static of<T>(value: T): Optional<T> {
    return new Optional(value)
  }

  /**
   * Returns an {@code Optional} describing the specified value, if non-null,
   * otherwise returns an empty {@code Optional}.
   *
   * @param value the possibly-null value to describe
   * @return an {@code Optional} with a present value if the specified value
   * is non-null, otherwise an empty {@code Optional}
   */
  public static ofNullable<T>(value: T): Optional<T> {
    return value == null ? this.empty() : this.of(value)
  }

  /**
   * If a value is present in this Optional, returns the value,
   * otherwise throws NoSuchElementException.
   *
   * @return the non-null value held by this {@code Optional}
   * @throws NoSuchElementException if there is no value present
   */
  public get(): T {
    if (this.value == null) {
      throw new NoSuchElementException("No value present.")
    }
    return this.value
  }

  /**
   * Return true if there is a value present, otherwise false.
   *
   * @return true if there is a value present, otherwise false
   */
  public isPresent(): boolean {
    return this.value != null
  }

  /**
   * If a value is present, invoke the specified consumer with the value,
   * otherwise do nothing.
   *
   * @param callback block to be executed if a value is present
   * @throws NullPointerException if value is present and callback is
   * null
   */
  public ifPresent(callback: (param: T) => void): void {
    if (this.value != null) {
      callback(this.value)
    }
  }

  /**
   * If a value is present, apply the provided mapping function to it,
   * and if the result is non-null, return an {@code Optional} describing the
   * result.  Otherwise return an empty {@code Optional}.
   *
   * @param callback a mapping function to apply to the value, if present
   * @return an {@code Optional} describing the result of applying a mapping
   * function to the value of this {@code Optional}, if a value is present,
   * otherwise an empty {@code Optional}
   * @throws NullPointerException if the mapping function is null
   */
  public map<U>(callback: (param: T) => U): Optional<U> {
    if (this.value == null) {
      return Optional.empty()
    } else {
      return Optional.ofNullable(callback(this.value))
    }
  }

  /**
   * Return the value if present, otherwise return other.
   *
   * @param other the value to be returned if there is no value present, may
   * be null
   * @return the value, if present, otherwise other
   */
  public orElse(other: T): T {
    return this.value != null ? this.value : other;
  }

}