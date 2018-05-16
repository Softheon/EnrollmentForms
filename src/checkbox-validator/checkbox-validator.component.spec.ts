import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CheckboxValidatorComponent } from './checkbox-validator.component';

describe('CheckboxValidatorComponent', () => {
  let component: CheckboxValidatorComponent;
  let fixture: ComponentFixture<CheckboxValidatorComponent>;

  /**
   * The expected array value
   */
  let expectedArray: any[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxValidatorComponent],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxValidatorComponent);
    component = fixture.componentInstance;

    expectedArray = [];
    component.array = expectedArray;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
