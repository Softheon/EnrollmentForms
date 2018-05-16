import { callingCodes } from './calling-codes';
import { PhoneType } from './phone-type.enum';

/**
 * The phone number model
 */
export class PhoneNumber {
  /** The type of phone number. Currently not used */
  public type: PhoneType;

  /** The calling code for the phone number. I.e., U.S.A is 1 */
  public callingCode: string;

  /** The country name for the calling code */
  public callingCodeName: string;

  /** The phone number */
  public phoneNumber: string;

  /** The phone number's extension, always optional */
  public extensionCode: string;

  /** The phone number's calling code display name */
  private _displayName: string;

  /**
   * Sets the display name
   * @param value The value to set
   * @returns {} 
   */
  public set displayName(value: string) {
    this._displayName = value;

    // Handle null values, which should never happen through normal user input
    if (value == null) {
      this.setDefaultCallingCode
    }
    else {
      this.callingCodeName = this._displayName.split('+')[0].trim();
      this.callingCode = this._displayName.split('+')[1];
    }
  }

  /**
   * Gets the display name
   * @returns {} The display name
   */
  public get displayName(): string {
    //If there is no display name but there is a calling code and calling code name, then generate the display name
    if (!this._displayName && this.callingCode && this.callingCodeName) {
      const callingCode = callingCodes.filter(x => x.callingCode === this.callingCode && x.name === this.callingCodeName)[0];
      return callingCode.name.concat(' +', callingCode.callingCode); //I.e. United States +1
    }

    return this._displayName;
  }

  /**
   * Default constructor. Initializes the phone number to United States calling code since the vast majority of users will be from the United States
   */
  constructor() {
    this.setDefaultCallingCode();
  }

  /**
   * Removes any parenthesis, hyphens, or spaces from the phone number. I.e. (012) 345-6789 => 0123456789
   */
  public getCleanPhoneNumber(): string {
    if (this.phoneNumber) {
      return this.phoneNumber.replace('(', '').replace(')', '').replace(' ', '').replace('-', '').trim();
    }

    return null;
  }

  /**
   * Prints the phone number
   */
  public toString(): string {
    return `${this.displayName} ${this.phoneNumber} ${this.extensionCode ? this.extensionCode : ''}`;
  }

  /**
   * Sets the default calling code
   */
  private setDefaultCallingCode(): void {
    this.callingCode = "1";
    this.callingCodeName = "United States";
  }
}
