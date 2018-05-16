import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { States, State } from './states';

/**
 * Displays input for US state code
 */
@Component({
  selector: 'enroll-form-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  /** Whether the address is required. Defaults to true */
  @Input()
  public required: boolean = true;

  /** Whether the component should be read-only */
  @Input()
  public readonly: boolean = false;

  /** An ID used to differentiate a component when multiple instances appears on the same page */
  @Input()
  public id: string = '';

  /** The state model */
  @Input()
  public state: string;

  /** The default state */
  @Input()
  public defaultState: string;

  /** Output event */
  @Output()
  public stateChange: EventEmitter<string> = new EventEmitter<string>();

  /** The states */
  public states: State[] = States.states;

  /**
   * The constructor
   */
  constructor() { }

  /**
   * Called when the component is initialized
   */
  public ngOnInit(): void {

    // Overwrite the state value with default state, as long as state does not have a value already
    if (this.defaultState && !this.state) {
      // Set a timeout to prevent errors
      setTimeout(() => {
        this.state = this.defaultState;
        this.onChange();
      }, 1);
    }
  }

  /**
   * Called on change of input. Emits the new value
   */
  public onChange() {
    this.state = this.state.toUpperCase();
    this.stateChange.emit(this.state);
  }
}
