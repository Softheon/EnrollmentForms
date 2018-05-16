import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { Employer } from './employer';

import { EmployerComponent } from './employer.component';

describe('EnrollForm/EmployerComponent', () => {
  let component: EmployerComponent;
  let fixture: ComponentFixture<EmployerComponent>;

  /**
   * The expected employer
   */
  let expectedEmployer: Employer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerComponent],
      imports: [
        FormsModule,
        TranslateModule.forRoot()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerComponent);
    component = fixture.componentInstance;

    expectedEmployer = new Employer();
    component.employer = expectedEmployer;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
