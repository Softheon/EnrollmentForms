import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

/**
 * Directive for validating the input has the required numbered of digits
 */
@Directive({
  selector: '[numberOfDigitsRange]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumberOfDigitsRangeDirective, multi: true }]
})
export class NumberOfDigitsRangeDirective implements Validator {

  /**
   * The accepted possible number of digits the input is expected to have
   */
  @Input()
  public numberOfDigitsRange: number[] = [];

  /**
   * Validates the input control has the number of digits specified from the 'numberOfDigitsRange' input variable
   * @param control
   */
  public validate(control: AbstractControl): { [key: string]: any; } {
    return this.numberOfDigitsRange ? this.numberOfDigitsValidator(this.numberOfDigitsRange)(control) : null;
  }

  /**
   * Validates the input control has one of the expected number of digits in its value. Returns an 'invalid' error state if it does not match.
   * @param range The set of acceptable lengths
   */
  private numberOfDigitsValidator(range: number[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let value = control.value as string;
      if (value) {
        let controlLength = value.replace(/[^0-9]/g, "").length;
        if (!range.find(r => r == controlLength)) {
          // If the control length does not exist within the range
          return { 'invalid': { value: control.value } };
        }
      }

      return null;
    };
  }
}
