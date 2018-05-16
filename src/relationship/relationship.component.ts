import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Relationship, FamilyRelationships, LegalRelationships, TaxRelationships } from './relationship.enum';

/**
 * Displays the relationship component
 */
@Component({
  selector: 'enroll-form-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css']
})
export class RelationshipComponent implements OnInit {

  /**ID to use inputs */
  @Input()
  public id: string = '';

  /**relationship constant to use */
  @Input()
  public relationshipConst: string = '';

  /**If the input is required */
  @Input()
  public required: boolean = false;

  /** The input relationship options */
  @Input()
  public relationshipOptions: Relationship[] = [];

  /**Is the person the spouse */
  @Input()
  public isSpouse: boolean = false;

  /** The relationship input */
  @Input()
  public relationship: Relationship;

  /** The relationship change event */
  @Output()
  public relationshipChange: EventEmitter<Relationship> = new EventEmitter<Relationship>();

  /** The relationship input options */
  public dropDownValues: Relationship[] = [];

  constructor() { }

  /**
   * Called when the component is initialized
   */
  public ngOnInit(): void {
    // Use the custom values if one was provided
    if (this.relationshipOptions && this.relationshipOptions.length > 0) {
      this.dropDownValues = this.relationshipOptions;
    }
    else {
      //determine the relationship constant to use
      switch (this.relationshipConst) {
        case 'family': {
          this.dropDownValues = FamilyRelationships;
          break;
        }
        case 'legal': {
          this.dropDownValues = LegalRelationships;
          break;
        }
        case 'tax': {
          this.dropDownValues = TaxRelationships;
          break;
        }
        default: {
          this.dropDownValues = FamilyRelationships
        }
      }
    }

    // If this is a spouse, force set the relationship
    if (this.isSpouse) {
      this.relationship = Relationship.SPOUSE;
      this.relationshipChange.emit(Relationship.SPOUSE);
    }
  }

  /**
   * Called when the selection has changed
   */
  public onSelectionChange(): void {
    this.relationshipChange.emit(this.relationship);
  }

}
