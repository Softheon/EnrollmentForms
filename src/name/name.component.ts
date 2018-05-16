import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm, FormGroup } from '@angular/forms';

import { Name } from './name';
import { Suffix } from './suffix.enum';

/**
 * Displays a name form input
 */
@Component({
  selector: 'enroll-form-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  /** The name model */
  @Input()
  public name: Name;

  /** Determines if fields are required */
  @Input()
  public required: boolean = true;

  /** Determines if the middle name should be shown */
  @Input()
  public showMiddle: boolean = true;

  /** Determines if suffix input should be shown */
  @Input()
  public showSuffix: boolean = true;

  /** The available suffix options to choose from */
  @Input()
  public suffixOptions: Suffix[] = [
    Suffix.Jr,
    Suffix.Sr,
    Suffix.Iii,
    Suffix.Iv
  ];

  /** An ID used to differentiate a component when multiple instances appears on the same page */
  @Input()
  public id: string = '';

  /** The selected suffix */
  public selectedSuffix: Suffix;

  /**
   * Default constructor.
   */
  constructor() { }

  /**
   * Called on initialization of the component
   */
  public ngOnInit(): void {
    if (!this.name) {
      this.name = new Name();
    }
    // If the provided suffix is not in the list of suffix options, clear out the value
    else if (this.name.suffix && !this.suffixOptions.find(s => s == this.name.suffix)) {
      this.name.suffix = null;
    }
  }
}
