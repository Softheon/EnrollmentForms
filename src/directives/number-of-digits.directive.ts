import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

/**
 * Directive for validating the input has the required numbered of digits
 */
@Directive({
  selector: '[numberOfDigits]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumberOfDigitsDirective, multi: true }]
})
export class NumberOfDigitsDirective implements Validator {

  /**
   * The number of digits the input is expected to have
   */
  @Input()
  public numberOfDigits: number;

  /**
   * Validates the input control has the number of digits specified from the 'numberOfDigits' input variable
   * @param control
   */
  public validate(control: AbstractControl): { [key: string]: any; } {
    return this.numberOfDigits ? this.numberOfDigitsValidator(this.numberOfDigits)(control) : null;
  }

  /**
   * Validates the input control has the expected number of digits in it's value. Returns an 'invalid' error state if it does not match.
   * @param length The number of digits expected
   */
  private numberOfDigitsValidator(length: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value) {
        return control.value.replace(/[^0-9]/g, "").length !== length ? { 'invalid': { value: control.value } } : null;
      }

      return null;
    };
  }
}
