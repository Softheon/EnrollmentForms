import { Component, OnInit, Input } from '@angular/core';

import { Employer } from './employer';

/**
 * Component to collect employer information
 */
@Component({
  selector: 'enroll-form-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  /** The employer data */
  @Input()
  public employer: Employer;

  /** An ID used to differentiate a component when multiple instances appears on the same page */
  @Input()
  public id: string;

  constructor() { }

  ngOnInit() {
  }

}
