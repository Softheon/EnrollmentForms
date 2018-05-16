import { Suffix } from "./suffix.enum"

/**
 * Contains a name object
 */
export class Name {
  /** The first name */
  public firstName: string = "";

  /** The middle name */
  public middleName?: string = "";

  /** The last name */
  public lastName: string = "";

  /** The suffix */
  public suffix?: Suffix;
}
