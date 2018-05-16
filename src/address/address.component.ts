import { Component, OnInit, Input } from '@angular/core';

import { Address } from './address';
import { County } from './county';

import { AddressService } from './address.service';

/**
 * The address component
 */
@Component({
  selector: 'enroll-form-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  /** The address model */
  @Input()
  public address: Address;

  /** Whether the address is required. Defaults to true */
  @Input()
  public required: boolean = true;

  /** Whether the county should be shown */
  @Input()
  public showCounty: boolean = true;

  /** Whether the street name 2 field should be shown */
  @Input()
  public showStreetName2: boolean = true;

  /** Whether or not to allow zip code to be greater than 5 digits */
  @Input()
  public showZipCodeExt: boolean = true;

  /** True if just the zip field should be shown */
  @Input()
  public justZip: boolean;

  /** True if the state input should be disabled */
  @Input()
  public disableState: boolean;

  /** The default state code */
  @Input()
  public defaultState: string;

  /** An ID used to differentiate a component when multiple instances appears on the same page */
  @Input()
  public id: string = '';

  /** Whether the component should be read-only */
  @Input()
  public readonly: boolean = false;

  /** The counties */
  public counties: County[] = [];

  /** The zip code mask */
  public zipCodeMask: (RegExp | string)[];

  /** The possible zip code length values */
  public readonly zipCodeLengthRange: number[] = [5, 9];

  /** Used for determining if the zip code value has changed */
  private prevZipCode: string;

  /**
   * Default constructor
   * @param addressService The address service
   */
  constructor(private addressService: AddressService) { }

  /**
   * Called on initialization
   */
  public ngOnInit(): void {
    if (!this.address) {
      this.address = new Address();
    }
    this.setZipMask();
    this.setCounties();
  }

  /**
   * Called when the zip code input changes
   * @param event The event
   */
  public onZipChange(event: Event): void {
    this.setZipMask();
    this.setCounties();
  }

  /**
   * Called when a county is selected
   */
  public onCountyChange(): void {
    let county = this.counties.find(c => c.name == this.address.countyName);
    if (county) {
      this.address.countyFipsCode = county.fips;
    }
  }

  /**
   * Gets the zip code mask
   */
  private setZipMask(): void {
    // Use full zip code if zip code is empty or length greater than 5 (to allow copy/paste)
    if (this.showZipCodeExt && (this.address.zipCodeExt || (this.address.zipCodeBase && this.address.zipCodeBase.length > 5))) {
      this.zipCodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      if (this.address.zipCodeBase && this.address.zipCodeBase.length > 5) {
        this.address.zipCode = `${this.address.zipCodeBase.slice(0, 5)}-${this.address.zipCodeBase.slice(5)}`
      }
    }
    else if (this.showZipCodeExt) {
      // Allow 9 characters. If the length passes 5 characters, the condition above will be hit to change formatting.
      // This allows copy/pasting of a full 9-digit zip code.
      this.zipCodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    }
    else {
      // If not showing zip code extension, only allow 5 characters
      this.zipCodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/];
    }
  }

  /**
   * Sets the counties
   */
  private setCounties(): void {
    // Stop if not showing county input
    if (!this.showCounty) {
      return;
    }

    // If zip code base is 5 digits and the previous valid zip code does not match
    if (this.address.zipCodeBase && this.address.zipCodeBase.length == 5 && this.address.zipCodeBase != this.prevZipCode) {
      // Set the previous zip code value
      this.prevZipCode = this.address.zipCodeBase;
      let prevCounty = this.address.countyName;
      this.addressService.getCounties(this.address.zipCodeBase).then(c => {
        this.counties = c;
        if (this.counties.length == 1) {
          this.address.countyName = this.counties[0].name;
          this.address.countyFipsCode = this.counties[0].fips;
        }
        else if (!this.counties.find(c => c.name === prevCounty)) {
          // If the previously-set county is not on the new list, reset the county value
          this.address.countyName = null;
          this.address.countyFipsCode = null;
        }
      }).catch(error => {
        // If there was an exception, reset previous zip code so that we can try again
        this.prevZipCode = null;
      });
    }

  }

}
