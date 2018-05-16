import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

/**
 * Date validation directive
 */
@Directive({
  selector: '[dateValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true }]

})
export class DateValidatorDirective {

  /**
   * Validates the control
   */
  public validate(control: AbstractControl): { [key: string]: any; } {
    return this.dateValidator()(control);
  }

  /**
   * Helper function that validates the control
   */
  private dateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      //If there are any unused tokens that means Moment JS is assuming what those values are. Do not allow that and return an invalid date.
      let pendingValue = (control as any)._pendingValue;
      if (pendingValue && pendingValue._pf.unusedTokens.length !== 0) {
        return { 'invalid': { value: control.value } };
      }

      return null;
    };
  }
}
