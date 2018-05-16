import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * Numbers only directive
 */
@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {

  /**
   * Constructs the directive
   * @param el The element
   */
  constructor(private el: ElementRef) { }

  /** True if only numbers allowed */
  @Input() public numbersOnly: boolean;

  /**
   * Only allows number inputs
   * @param event Key Event
   */
  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent>event;
    if (this.numbersOnly) {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && e.ctrlKey) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && e.ctrlKey) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && e.ctrlKey) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    }
  }
}

