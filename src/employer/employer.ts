import { Address } from '../address/address';
import { PhoneNumber } from '../phone-number/phone-number';

export class Employer {
  /** The employer name for JOB type incomes */
  public name: string;

  /** The employer phone number */
  public phone: PhoneNumber;

  /** The employer identification number (EIN) */
  public id: string;

  /** The employer address */
  public address: Address;

  /**
   * Constructs the object
   */
  constructor() {
    this.phone = new PhoneNumber();
    this.address = new Address();
  }
}
