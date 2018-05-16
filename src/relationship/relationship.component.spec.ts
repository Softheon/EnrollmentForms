import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatInputModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatAutocompleteModule, MatDatepickerModule, MatTableModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { RelationshipComponent } from './relationship.component';

describe('EnrollForm/RelationshipComponent', () => {
  let component: RelationshipComponent;
  let fixture: ComponentFixture<RelationshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RelationshipComponent],
      imports: [
        TranslateModule.forRoot()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
