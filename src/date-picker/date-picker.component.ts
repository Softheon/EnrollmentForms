import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as _moment from 'moment';
const moment = _moment;

/**
 * Date Picker Input UI component
 */
@Component({
  selector: 'enroll-form-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  /** The selected date model */
  @Input()
  public date: Date = null;

  /** The change date event emitter */
  @Output()
  public dateChange: EventEmitter<Date> = new EventEmitter<Date>();

  /** The model for the date picker input */
  public model: _moment.Moment;

  /** The placeholder text for the date picker input */
  @Input()
  public placeholder: string;

  /** The maximum date the date picker should allow */
  @Input()
  public maxDate: Date = null;

  /** The minimum date the date picker should allow */
  @Input()
  public minDate: Date = null;

  /** The date the date picker should start with */
  @Input()
  public startAt: Date = null;

  /** An ID used to differentiate a component when multiple instances appears on the same page */
  @Input()
  public id: string = '';

  /** Whether the date picker is required */
  @Input()
  public required: boolean = true;

  /** The width of the date picker input */
  @Input()
  public width: string = "100px";

  /** Default constructor */
  constructor() { }

  /**
   * Called on initialization of the component
   */
  public ngOnInit(): void {
    //If a date was passed, set up the model to match that date
    if (this.date) {
      this.model = moment(this.date, "MM/DD/YYYY", true);
    }
  }

  /**
   * Called on input value change
   * @param newVal The new date
   */
  public onChange(newVal: string): void {
    //If there isn't a new value or the input was cleared
    if (!newVal) {
      //Emit a null date
      this.dateChange.emit(null);
    }

    if (this.model) {
      //Emit the new date
      this.dateChange.emit(this.model.toDate());
    }
  }
}
