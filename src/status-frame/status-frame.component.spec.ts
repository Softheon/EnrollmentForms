import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatFormFieldModule, MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { StatusFrameComponent } from './status-frame.component';
import { Application } from '../../ede/models/application';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('StatusFrameComponent', () => {
  let component: StatusFrameComponent;
  let fixture: ComponentFixture<StatusFrameComponent>;
  let applicationServiceStub: {
    getApplication(): Application;
  }

  beforeEach(async(() => {

    applicationServiceStub = {
      getApplication(): Application {
        return new Application();
      }
    };

    TestBed.configureTestingModule({
      declarations: [ StatusFrameComponent ],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatCardModule,
        TranslateModule.forRoot(),
        FlexLayoutModule
      ],
      providers: [
        { provide: Application, useValue: applicationServiceStub}
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(StatusFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
