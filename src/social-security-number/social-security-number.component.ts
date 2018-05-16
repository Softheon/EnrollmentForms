import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Social security number component
 */
@Component({
  selector: 'enroll-form-social-security-number',
  templateUrl: './social-security-number.component.html',
  styleUrls: ['./social-security-number.component.css']
})
export class SocialSecurityNumberComponent implements OnInit {

  /** Whether the social security number is required */
  @Input()
  public required: boolean = true;

  /** An ID used to differentiate a component when multiple instances appears on the same page */
  @Input()
  public id: string = '';

  /** The social security number */
  @Input()
  public ssn: string;

  /** The social security number output event */
  @Output()
  public ssnChange: EventEmitter<string> = new EventEmitter<string>();

  /** The text mask for the social security number */
  public mask: (string | RegExp)[] = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  /**
   * Default constructor
   */
  constructor() { }

  /**
   * Called on initialization of the component
   */
  ngOnInit() {
  }

  /**
   * Called when value of social security number changes. Emits the new value
   * @param value The new social security number
   */
  public onChange(value: string): void {
    this.ssnChange.emit(value);
  }

}
