import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddressService } from './address.service';

describe('EnrollForm/AddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([AddressService], (service: AddressService) => {
    expect(service).toBeTruthy();
  }));
});
