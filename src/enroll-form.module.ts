import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core'; 

import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatAutocompleteModule, MatDatepickerModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { TextMaskModule } from 'angular2-text-mask';

import { AddressService } from './address/address.service';

import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';

import { ProvideParentFormDirective } from './directives/provide-parent-form.directive';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { NumberOfDigitsDirective } from './directives/number-of-digits.directive';
import { NumberOfDigitsRangeDirective } from './directives/number-of-digits-range.directive';
import { CallingCodeDirective } from './directives/calling-code.directive';
import { DateValidatorDirective } from './directives/date-validator.directive';

import { NameComponent } from './name/name.component';
import { AddressComponent } from './address/address.component';
import { EmailComponent } from './email/email.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { StatusFrameComponent } from './status-frame/status-frame.component';
import { SocialSecurityNumberComponent } from './social-security-number/social-security-number.component';
import { CurrencyComponent } from './currency/currency.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { EmployerComponent } from './employer/employer.component';
import { AmountComponent } from './amount/amount.component';
import { BooleanComponent } from './boolean/boolean.component';
import { RelationshipComponent } from './relationship/relationship.component';
import { CheckboxValidatorComponent } from './checkbox-validator/checkbox-validator.component';
import { StateComponent } from './state/state.component';
import { AlertComponent } from './alert/alert.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/DD/YYYY'
  },
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'MM/DD/YYYY',
    dateA11yLabel: 'MM/DD/YYYY',
    monthYearA11yLabel: 'MM/DD/YYYY',
  },
};

/**
 * The module for the individual form components
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    TextMaskModule,
    MatCardModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatMomentDateModule
  ],
  declarations: [
    NameComponent,
    AddressComponent,
    NumbersOnlyDirective,
    ProvideParentFormDirective,
    EmailComponent,
    StatusFrameComponent,
    PhoneNumberComponent,
    NumberOfDigitsDirective,
    NumberOfDigitsRangeDirective,
    CallingCodeDirective,
    SocialSecurityNumberComponent,
    CurrencyComponent,
    DatePickerComponent,
    EmployerComponent,
    AmountComponent,
    BooleanComponent,
    RelationshipComponent,
    CheckboxValidatorComponent,
    DateValidatorDirective,
    CapitalizeFirstPipe,
    StateComponent,
    AlertComponent
  ],
  exports: [
    NameComponent,
    AddressComponent,
    EmailComponent,
    PhoneNumberComponent,
    SocialSecurityNumberComponent,
    StatusFrameComponent,
    CurrencyComponent,
    EmployerComponent,
    AmountComponent,
    BooleanComponent,
    ProvideParentFormDirective,
    DatePickerComponent,
    RelationshipComponent,
    CheckboxValidatorComponent,
    DateValidatorDirective,
    NumbersOnlyDirective,
    CapitalizeFirstPipe,
    StateComponent,
    AlertComponent
  ],
  providers: [
    AddressService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class EnrollFormModule { }
