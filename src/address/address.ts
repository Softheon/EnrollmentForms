/**
 * The address model
 */
export class Address {
  /** The first line of the street address. */
  public streetName1: string;

  /** The second line of the street address. */
  public streetName2: string;

  /** The name of the city where the address is located. */
  public cityName: string;

  /** The two letter USPS State Code */
  public stateCode: string;

  /** The full five-or-nine-digit zip code zip code */
  public zipCode: string;

  /** The base 5-digit zip code */
  public get zipCodeBase(): string {
    if (this.zipCode && this.zipCode.indexOf('-') > -1) {
      return this.zipCode.split('-')[0];
    }
    return this.zipCode;
  }

  /** The four-digit delivery area of the zip code extension */
  public get zipCodeExt(): string {
    if (this.zipCode && this.zipCode.indexOf('-') > -1) {
      return this.zipCode.split('-')[1];
    }
    return null;
  }

  /** The FIPS ID of the county where the address is located. */
  public countyFipsCode: string;

  /** The name of the county where the address is located. */
  public countyName: string;

  constructor() { }

  /**
   * Returns the address in an easy-to-read string format
   */
  public toString(): string {
    let addressString = '';
    if (this.streetName1 || this.streetName2) {
      addressString += `${this.streetName1}${this.streetName2 ? ' ' + this.streetName2 : ''}, `;
    }
    addressString += this.toStringBottom();
    return addressString;
  }

  /**
   * Gets the bottom line of an address string, to allow address to be split into multiple lines
   */
  public toStringBottom(): string {
    let addressString = '';
    if (this.cityName) {
      addressString += `${this.cityName}, `;
    }
    if (this.stateCode) {
      addressString += `${this.stateCode} `;
    }
    if (this.zipCode) {
      addressString += `${this.zipCode}`;
    }
    return addressString;
  }
}
