import { Component, OnInit, Input } from '@angular/core';

/**
 * Displays an alert to the user
 */
@Component({
  selector: 'enroll-form-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  /** The alert text */
  @Input()
  public text: string;

  /** Shows the alert message */
  @Input()
  public show: boolean = true;

  /** The HTML alignment. Can be left, center, or right */
  @Input()
  public align: string = 'center';

  constructor() { }

  ngOnInit() {
  }

}
