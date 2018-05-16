import { Component, OnInit, Input } from '@angular/core';

import { callingCodes, CallingCode } from './calling-codes';
import { PhoneNumber } from './phone-number';
import { PhoneType } from './phone-type.enum';

/**
 * Input for collecting phone number information
 */
@Component({
  selector: 'enroll-form-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {

  /** The phone number model */
  @Input()
  public phoneNumber: PhoneNumber;

  /** Whether the phone number is required */
  @Input()
  public required: boolean = true;

  /** Whether the collect the phone type */
  @Input()
  public showPhoneType: boolean = true;

  /** Whether to collect the calling code */
  @Input()
  public showCallingCode: boolean = false;

  /** Whether to show the extension code input */
  @Input()
  public showExtensionCode: boolean = true;

  /** The placeholder text to use for the phone number */
  @Input()
  public placeholder: string = 'enroll-form.phone-number.phoneNumber';

  /** The placeholder text to use for the phone number */
  @Input()
  public placeholderExt: string = 'enroll-form.phone-number.extensionCode';

  /** The placeholder text to use for the phone number */
  @Input()
  public placeholderType: string = 'enroll-form.phone-number.phoneType';

  /** An ID used to differentiate a component when multiple instances appears on the same page */
  @Input()
  public id: string = '';

  /** The phone type options */
  public typeOptions: PhoneType[] = [null, PhoneType.MOBILE, PhoneType.HOME, PhoneType.WORK];

  /** The original list of calling codes */
  public tdCallingCodes: CallingCode[];

  /** The filtered calling codes */
  public callingCodes: CallingCode[] = callingCodes.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

  /**
   * The default constructor
   */
  constructor() {
    this.tdCallingCodes = callingCodes;
  }

  /**
   * Called on initialization
   */
  public ngOnInit(): void {
    if (!this.phoneNumber) {
      this.phoneNumber = new PhoneNumber();
    }
  }

  /**
   * Filters the auto-complete drop down
   * @param val The value
   */
  public filterCallingCodes(val: string): CallingCode[] {
    return val ? this.filter(this.callingCodes, val) : this.callingCodes;
  }

  /**
   * Gets the phone mask for the phone number input
   */
  public getPhoneMask(): (RegExp | string)[] {
    if (this.phoneNumber && this.phoneNumber.callingCodeName === "United States") {
      return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }

    return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    ;
  }

  /**
   * Determines the number of digits the phone number requires
   */
  public determineDigits(): number {
    //If U.S.A return 10 digits (XXX) XXX-XXXX
    if (this.phoneNumber && this.phoneNumber.callingCodeName === "United States") {
      return 10;
    }

    //TODO: Determine number of digits for all other countries
    return null;
  }

  /**
   * Filters the auto complete drop down to show calling codes that match what was entered in the input
   * @param callingCodes The calling codes to filter 
   * @param val The value entered in the input
   */
  private filter(callingCodes: CallingCode[], val: string): CallingCode[] {
    const filterValue = val.toLowerCase();
    return callingCodes.filter(callingCode => (callingCode.name.toLowerCase().concat(' +', callingCode.callingCode)).indexOf(filterValue.replace(/\s/g, ' ')) > -1);
  }
}
