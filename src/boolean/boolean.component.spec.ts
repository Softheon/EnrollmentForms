import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { BooleanComponent } from './boolean.component';

describe('EnrollForm/BooleanComponent', () => {
  let component: BooleanComponent;
  let fixture: ComponentFixture<BooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BooleanComponent],
      imports: [
        FormsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
