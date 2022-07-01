/**
 * NoSuchElementException means the value is null.
 */
export class NoSuchElementException extends Error {

  public constructor(message: string) {
    super(message);
  }
}