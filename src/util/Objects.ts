import {NullPointerException} from '../exceptions/NullPointerException'

export class Objects {
  private constructor() {
    throw new Error('No util.Objects instances for you!')
  }

  public static requireNonNull<T>(value: T | null): T {
    if (value == null) {
      throw new NullPointerException()
    }
    return value
  }
}