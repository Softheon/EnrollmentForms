import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { Amount } from './amount';

import { AmountComponent } from './amount.component';

describe('EnrollForm/AmountComponent', () => {
  let component: AmountComponent;
  let fixture: ComponentFixture<AmountComponent>;

  /**
   * The expected amount input
   */
  let expectedAmount: Amount;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmountComponent],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatSelectModule,
        TranslateModule.forRoot()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountComponent);
    component = fixture.componentInstance;

    expectedAmount = new Amount();
    component.amount = expectedAmount;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
