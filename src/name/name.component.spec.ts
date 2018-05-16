import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TranslateModule } from '@ngx-translate/core';

import { Name } from './name';
import { Suffix } from './suffix.enum';

import { NameComponent } from './name.component';

describe('EnrollForm/NameComponent', () => {
  let component: NameComponent;
  let fixture: ComponentFixture<NameComponent>;

  let expectedName: Name;

  let firstNameElement: DebugElement;
  let middleNameElement: DebugElement;
  let lastNameElement: DebugElement;

  /**
   * Function for setting the debug elements after the fixture is stable
   */
  let setDebugElements = function () {
    firstNameElement = fixture.debugElement.query(By.css('#firstName'));
    middleNameElement = fixture.debugElement.query(By.css('#middleName'));
    lastNameElement = fixture.debugElement.query(By.css('#lastName'));
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NameComponent],
      imports: [FormsModule,
        TranslateModule.forRoot(),
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameComponent);
    component = fixture.componentInstance;

    expectedName = new Name();
    expectedName.firstName = 'John';
    expectedName.middleName = 'D';
    expectedName.lastName = 'Doe';
    expectedName.suffix = Suffix.Sr;
    component.name = expectedName;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map first name with model', () => {
    const expectedFirstName = expectedName.firstName;
    return fixture.whenStable().then(() => {
      setDebugElements();
      expect(firstNameElement.nativeElement.value).toEqual(expectedFirstName);
    });
  });

  it('should map middle name with model', () => {
    const expectedMiddleName = expectedName.middleName;
    return fixture.whenStable().then(() => {
      setDebugElements();
      expect(middleNameElement.nativeElement.value).toEqual(expectedMiddleName);
    });
  });

  it('should map last name with model', () => {
    const expectedLastName = expectedName.lastName;
    return fixture.whenStable().then(() => {
      setDebugElements();
      expect(lastNameElement.nativeElement.value).toEqual(expectedLastName);
    });
  });
});
