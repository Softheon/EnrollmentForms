import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { TextMaskModule } from 'angular2-text-mask';

import { Address } from './address';

import { AddressService } from './address.service';

import { NumberOfDigitsRangeDirective } from '../directives/number-of-digits-range.directive';

import { AddressComponent } from './address.component';

describe('EnrollForm/AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  /**
   * The mock address service
   */
  let addressServiceStub: {
    getCounties(zipCode: string): Promise<any[]>
  };

  let streetName1Element: DebugElement;
  let streetName2Element: DebugElement;
  let cityElement: DebugElement;
  let stateElement: DebugElement;
  let zipCodeElement: DebugElement;
  let countyElement: DebugElement;

  /**
   * Function for setting the debug elements after the fixture is stable
   */
  let setDebugElements = function () {
    streetName1Element = fixture.debugElement.query(By.css("#streetName1"));
    streetName2Element = fixture.debugElement.query(By.css("#streetName2"));
    cityElement = fixture.debugElement.query(By.css("#city"));
    stateElement = fixture.debugElement.query(By.css("#state"));
    zipCodeElement = fixture.debugElement.query(By.css("#zipCode"));
    countyElement = fixture.debugElement.query(By.css("#county"));
  }

  /**
   * The expected address input
   */
  let expectedAddress: Address;

  beforeEach(async(() => {
    addressServiceStub = {
      getCounties(zipCode: string): Promise<any[]> {
        return Promise.resolve([]);
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        AddressComponent,
        NumberOfDigitsRangeDirective
      ],
      imports: [
        FormsModule,
        TextMaskModule,
        TranslateModule.forRoot(),
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: AddressService, useValue: addressServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;

    expectedAddress = new Address();
    expectedAddress.streetName1 = '123 Main Street';
    expectedAddress.streetName2 = 'Apartment A';
    expectedAddress.cityName = 'Manhattan';
    expectedAddress.stateCode = 'NY';
    expectedAddress.zipCode = '12345';
    expectedAddress.countyName = 'Suffok';

    component.address = expectedAddress;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map street', () => {
    const expectedStreetName1 = expectedAddress.streetName1;
    return fixture.whenStable().then(() => {
      setDebugElements();
      expect(streetName1Element.nativeElement.value).toEqual(expectedStreetName1);
    });
  });

  it('should map apartment/suite #', () => {
    const expectedStreetName2 = expectedAddress.streetName2;
    return fixture.whenStable().then(() => {
      setDebugElements();
      expect(streetName2Element.nativeElement.value).toEqual(expectedStreetName2);
    });
  });

  it('should map city', () => {
    const expectedCityName = expectedAddress.cityName;
    return fixture.whenStable().then(() => {
      setDebugElements();
      expect(cityElement.nativeElement.value).toEqual(expectedCityName);
    });
  });

  it('should map zip code', () => {
    const expectedZipCode = expectedAddress.zipCode;
    return fixture.whenStable().then(() => {
      setDebugElements();
      expect(zipCodeElement.nativeElement.value).toEqual(expectedZipCode);
    });
  });
});
