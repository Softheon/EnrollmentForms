import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TranslateModule } from '@ngx-translate/core';
import { TextMaskModule } from 'angular2-text-mask';

import { NumberOfDigitsDirective } from '../directives/number-of-digits.directive';
import { SocialSecurityNumberComponent } from './social-security-number.component';

describe('EnrollForm/SocialSecurityNumberComponent', () => {
  let component: SocialSecurityNumberComponent;
  let fixture: ComponentFixture<SocialSecurityNumberComponent>;

  let ssnElement: DebugElement;

  /**
   * Function for setting the debug elements after the fixture is stable
   */
  let setDebugElements = function () {
    ssnElement = fixture.debugElement.query(By.css("#ssn"));
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          TranslateModule.forRoot(),
          MatInputModule,
          MatFormFieldModule,
          BrowserAnimationsModule,
          FormsModule,
          TextMaskModule
        ],
        declarations: [
          SocialSecurityNumberComponent,
          NumberOfDigitsDirective
        ],
        schemas: [
          CUSTOM_ELEMENTS_SCHEMA
        ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSecurityNumberComponent);
    component = fixture.componentInstance;

    component.ssn = "123456789";

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map social security number', async(() => {
    const expectedSsn = "123-45-6789";
    fixture.whenStable().then(() => {
      setDebugElements();
      expect(ssnElement.nativeElement.value).toEqual(expectedSsn);
    });
  }));
});
