import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { callingCodes } from '../phone-number/calling-codes';

/**
 * Directive for validating calling codes
 */
@Directive({
  selector: '[callingCode]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CallingCodeDirective, multi: true }]

})
export class CallingCodeDirective implements Validator {

  /**
   * Validates the input control has a valid calling code
   * @param control The control to validate
   */
  public validate(control: AbstractControl): { [key: string]: any; } {
    return this.callingCodeValidator()(control);
  }

  /**
   * Determines if the calling code entered in the input matches a valid calling code. Returns an 'invalid' error state if calling code is invalid
   */
  private callingCodeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value) {
        return callingCodes.filter(code => (code.name + ' +' + code.callingCode) === control.value.replace(/\s/g, ' ')).length === 0 ? { 'invalid': { value: control.value } } : null;
      }

      return null;
    };
  }
}
