import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TranslateModule } from '@ngx-translate/core';
import { TextMaskModule } from 'angular2-text-mask';

import { CurrencyComponent } from './currency.component';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  let currencyElement: DebugElement;

  /**
   * Function for setting the debug elements after the fixture is stable
   */
  let setDebugElements = function () {
    currencyElement = fixture.debugElement.query(By.css('#currency'));
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
          CurrencyComponent
        ],
        schemas: [
          CUSTOM_ELEMENTS_SCHEMA
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;

    component.value = '500';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map amount', async(() => {
    const expectedAmount = '$500';
    fixture.whenStable().then(() => {
      setDebugElements();
      expect(currencyElement.nativeElement.value).toEqual(expectedAmount);
    });
  }));
});
