import { Component, OnInit, Input } from '@angular/core';

/**
 * Shared component used to validate a set of checkboxes
 * Pass in an array to ensure that at least one element in the array exist
 * Tip: you can filter the array before passing it in (ex, [array]="array.filter(a => a.checked == true)")
 */
@Component({
  selector: 'enroll-form-checkbox-validator',
  templateUrl: './checkbox-validator.component.html',
  styleUrls: ['./checkbox-validator.component.css']
})
export class CheckboxValidatorComponent implements OnInit {
  /** The array to validate */
  @Input()
  public array: any[];

  /** The unique ID of the component */
  @Input()
  public id: string = '';

  /** Used for null value input */
  public nullValue: null;

  constructor() { }

  ngOnInit() {
  }

}
