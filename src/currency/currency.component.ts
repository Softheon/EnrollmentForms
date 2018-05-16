import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';

/**
 * Currency input component
 */
@Component({
  selector: 'enroll-form-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  /** The currency amount */
  @Input()
  public value: string;

  /** The currency amount output event emitter */
  @Output()
  public valueChange: EventEmitter<string> = new EventEmitter<string>();

  /** Whether the component is required */
  @Input()
  public required: boolean = true;

  /** What to display before the amount. Defaults to '$'.what to display before the amount. Defaults to '$'. */
  @Input()
  public prefix: string = '$';

  /** What to display after the amount. Defaults to empty string. */
  @Input()
  public suffix: string = '';

  /** Whether or not to separate thousands. Defaults to true. */
  @Input()
  public includeThousandsSeparator: boolean = true;

  /** Character with which to separate thousands. Defaults to ','. */
  @Input()
  public thousandsSeparatorSymbol: string = ',';

  /** Whether or not to allow the user to enter a fraction with the amount. Defaults to true. */
  @Input()
  public allowDecimal: boolean = true;

  /** Character that will act as a decimal point. Defaults to '.' */
  @Input()
  public decimalSymbol: string = '.';

  /** How many digits to allow after the decimal. Defaults to 2 */
  @Input()
  public decimalLimit: number = 2;

  /** Limit the length of the integer number. Defaults to null for unlimited */
  @Input()
  public integerLimit: number = null;

  /** Whether or not to always include a decimal point and placeholder for decimal digits after the integer. Defaults to false. */
  @Input()
  public requireDecimal: boolean = false;

  /** Whether or not to allow negative numbers. Defaults to false */
  @Input()
  public allowNegative: boolean = false;

  /** Whether or not to allow leading zeros. Defaults to false */
  @Input()
  public allowLeadingZeroes: boolean = false;

  /** The placeholder for the input */
  @Input()
  public placeholder: string = 'enroll-form.currency.amount';

  /** An ID used to differentiate a component when multiple instances appears on the same page */
  @Input()
  public id: string = '';

  /** The input text mask */
  public mask: any;

  /**
   * Default constructor
   */
  constructor() { }

  /**
   * Called on initialization of the component
   */
  public ngOnInit(): void {
    this.mask = createNumberMask({
      prefix: this.prefix,
      suffix: this.suffix,
      includeThousandsSeparator: this.includeThousandsSeparator,
      thousandsSeparatorSymbol: this.thousandsSeparatorSymbol,
      allowDecimal: this.allowDecimal,
      decimalSymbol: this.decimalSymbol,
      decimalLimit: this.decimalLimit,
      integerLimit: this.integerLimit,
      requireDecimal: this.requireDecimal,
      allowNegative: this.allowNegative,
      allowLeadingZeroes: this.allowLeadingZeroes
    });
  }

  /**
   * Event handler for currency input value change
   * @param newVal The new currency value
   */
  public onChange(newVal: string): void {
    // Update the amount value to be a number
    let amount = this.cleanseValue(newVal);
    this.valueChange.emit(amount);
  }

  /**
   * Cleanse the given value of all non-numeric or non-standard characters
   * @param value The value to cleanse
   */
  private cleanseValue(value: string): string {
    value = value.split(this.thousandsSeparatorSymbol).join('');
    value = value.split(this.prefix).join('');
    value = value.split(this.suffix).join('');
    value = value.split(this.decimalSymbol).join('.');
    return value;
  }
}
