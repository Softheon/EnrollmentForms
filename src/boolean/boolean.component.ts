import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Displays boolean choice as yes/no question
 */
@Component({
  selector: 'enroll-form-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.css']
})
export class BooleanComponent implements OnInit {

  /** True if required, default to true */
  @Input()
  public required: boolean = true;

  /** The ID used to individually mark this component */
  @Input()
  public id: string = '';

  /** The text associated with the input */
  @Input()
  public label: string;

  /** The text to be displayed in a tool-tip */
  @Input()
  public tooltip: string;

  /** The text to display for True option */
  @Input()
  public yesText: string = 'common.yes';

  /** The text to display for False option */
  @Input()
  public noText: string = 'common.no';

  /** Sets if the true and false value order should be switched */
  @Input()
  public switchOrder: boolean = false;

  /** Boolean to determine if unknown option should display */
  @Input()
  public hasUnknown: boolean;

  /** The boolean input */
  @Input()
  public boolean: boolean;

  /** The unknown boolean input */
  @Input()
  public unknown: boolean;

  /** The boolean output event */
  @Output()
  public booleanChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** The unknown boolean output event */
  @Output()
  public unknownChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** Event to hook into to detect changes */
  @Output()
  public onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** The yes value */
  public yesValue: boolean = true;

  /** The no value */
  public noValue: boolean = false;

  constructor() { }

  /**
   * Called when the component is initialized
   */
  public ngOnInit(): void {
    if (this.switchOrder) {
      this.yesValue = false;
      this.noValue = true;
    }
  }

  /**
  * Called every time user input is registered
  * @param value The new value
  */
  public onChangeEvent(value: boolean): void {
    this.booleanChange.emit(value);
    this.onChange.emit(value);
    if (this.hasUnknown) {
      this.unknown = value === null;
      this.unknownChange.emit(value == null);
    }
  }

}
