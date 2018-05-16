import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TranslateModule } from '@ngx-translate/core';
import { TextMaskModule } from 'angular2-text-mask';

import { EmailComponent } from './email.component';

describe('EmailComponent', () => {
  let component: EmailComponent;
  let fixture: ComponentFixture<EmailComponent>;
  let emailElement: DebugElement;

  /**
   * Function for setting the debug elements after the fixture is stable
   */
  let setDebugElements = function () {
    emailElement = fixture.debugElement.query(By.css("#email"));
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [EmailComponent],
        imports: [FormsModule,
          TranslateModule.forRoot(),
          MatInputModule,
          MatFormFieldModule,
          MatSelectModule,
          BrowserAnimationsModule,
          TextMaskModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map email', () => {
    component.email = "johndoe@mail.com";
    const expectedEmail = "johndoe@mail.com";
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      setDebugElements();
      expect(emailElement.nativeElement.value).toEqual(expectedEmail);
    });
  });

  it('should require email', () => {
    component.required = true;
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      setDebugElements();
      expect(emailElement.attributes["ng-reflect-required"]).toEqual("true");
    });
  });

  it('should not require email', () => {
    component.required = false;
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      setDebugElements();
      expect(emailElement.attributes["ng-reflect-required"]).toEqual("false");
    });
  });
});
