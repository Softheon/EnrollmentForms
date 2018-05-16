import { Component, OnInit, Input } from '@angular/core';

import { Amount } from './amount';
import { Frequency } from './frequency.enum';

/**
 * Displays input for a recurring amount of money
 */
@Component({
  selector: 'enroll-form-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {

  /** The money amount */
  @Input()
  public amount: Amount;

  /** The frequency options the user can choose */
  @Input()
  public frequencies: Frequency[] = [
    Frequency.WEEKLY,
    Frequency.BI_WEEKLY,
    Frequency.SEMI_MONTHLY,
    Frequency.MONTHLY,
    Frequency.QUARTERLY,
    Frequency.ANNUALLY
  ];

  /** When true, displays tribal amount input */
  @Input()
  public displayTribalAmount: boolean = false;

  /** When true, displays profit/loss input */
  @Input()
  public displayProfitOrLoss: boolean = false;

  /** Unique ID of the inputs */
  @Input()
  public id: string = '';

  /** The frequency options that can be used in the component */
  public readonly frequency = Frequency;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Called when the frequency value changes
   */
  public onFrequencyChange(): void {
    // Clear out conditional fields based on frequency
    this.amount.resetFrequency();
  }
}
