import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import emailMask from 'text-mask-addons/dist/emailMask'

/**
 * Email address component
 */
@Component({
  selector: 'enroll-form-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  /** The email model */
  @Input()
  public email: string;

  /** Output event */
  @Output()
  public emailChange: EventEmitter<string> = new EventEmitter<string>();

  /** Whether the email is required */
  @Input()
  public required: boolean = true;

  /** An ID used to differentiate a component when multiple instances appears on the same page */
  @Input()
  public id: string = '';

  /**Size to be used for the flex box container, default is full size (100) */
  @Input()
  public flexSize: string = '100';

  /** Email mask */
  public emailMask = emailMask;

  /**
   * Default constructor
   */
  constructor() { }

  /**
   * Called on initialization of the component
   */
  public ngOnInit(): void {
    // The email form validation has issues with null values, so set the starting value to a string
    if (this.email == null) {
      this.email = '';
    }
  }

  /**
   * Called on change of email input. Emits the new email value
   * @param newVal The new email
   */
  public onChange(newVal: string) {
    this.emailChange.emit(newVal);
  }
}
