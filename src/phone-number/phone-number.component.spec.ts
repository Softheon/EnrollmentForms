import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TranslateModule } from '@ngx-translate/core';
import { TextMaskModule } from 'angular2-text-mask';

import { PhoneNumberComponent } from './phone-number.component';
import { NumbersOnlyDirective } from '../directives/numbers-only.directive';
import { CallingCodeDirective } from '../directives/calling-code.directive';
import { NumberOfDigitsDirective } from '../directives/number-of-digits.directive'
import { PhoneNumber } from './phone-number';

describe('EnrollForm/PhoneNumberComponent', () => {
  let component: PhoneNumberComponent;
  let fixture: ComponentFixture<PhoneNumberComponent>;

  let callingCodeElement: DebugElement;
  let phoneNumberElement: DebugElement;
  let extensionCodeElement: DebugElement;

  /**
   * Function for setting the debug elements after the fixture is stable
   */
  let setDebugElements = function () {
    phoneNumberElement = fixture.debugElement.query(By.css('#phoneNumber'));
  }

  let expectedPhoneNumber: PhoneNumber;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        MatInputModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
        FormsModule,
        TextMaskModule
        ],
     declarations: [
        PhoneNumberComponent,
        NumbersOnlyDirective,
        CallingCodeDirective,
        NumberOfDigitsDirective
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberComponent);
    component = fixture.componentInstance;

    expectedPhoneNumber = new PhoneNumber();
    expectedPhoneNumber.callingCode = '1';
    expectedPhoneNumber.callingCodeName = 'United States';
    expectedPhoneNumber.phoneNumber = '(212) 345-6789';
    expectedPhoneNumber.extensionCode = '12345';

    // For testing, show the calling code
    component.showCallingCode = true;

    component.phoneNumber = expectedPhoneNumber;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map display name', () => {
    const expectedDisplayName = 'United States +1';
    return fixture.whenStable().then(() => {
      setDebugElements();
      callingCodeElement = fixture.debugElement.query(By.css('#callingCode'));
      expect(component.phoneNumber.displayName).toEqual(expectedDisplayName);
      expect(callingCodeElement.nativeElement.value).toEqual(expectedDisplayName);
    });
  });

  it('should map phone number', () => {
    const expectedPhoneNumber = '(212) 345-6789';
    return fixture.whenStable().then(() => {
      setDebugElements();
      expect(phoneNumberElement.nativeElement.value).toEqual(expectedPhoneNumber);
    });
  });

  it('should clean phone number', () => {
    const expectedCleanPhoneNumber = '2123456789';
    expect(component.phoneNumber.getCleanPhoneNumber()).toEqual(expectedCleanPhoneNumber);
  });

  it('should map extension code', () => {
    const expectedExtensionCode = '12345';
    return fixture.whenStable().then(() => {
      setDebugElements();
      extensionCodeElement = fixture.debugElement.query(By.css('#extensionCode'));
      expect(extensionCodeElement.nativeElement.value).toEqual(expectedExtensionCode);
    });
  });
});
