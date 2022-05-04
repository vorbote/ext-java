/**
 * NoSuchElementException means the valus is null.
 */
export class NoSuchElementException extends Error {

  public constructor(message: string) {
    super(message);
  }
}