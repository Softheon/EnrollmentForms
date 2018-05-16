import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatDatepickerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { TranslateModule } from '@ngx-translate/core';

import { DatePickerComponent } from './date-picker.component';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;
  let dateAdapterStub: {};
  let formatStub: {};

  beforeEach(async(() => {
    dateAdapterStub = {};
    formatStub = {};

    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        FormsModule,
        BrowserAnimationsModule,
        MatMomentDateModule
      ],
      declarations: [DatePickerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
