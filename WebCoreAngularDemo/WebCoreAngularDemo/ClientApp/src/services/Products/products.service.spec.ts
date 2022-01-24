import { TestBed } from '@angular/core/testing';

import { InvoiceValidationService } from './products.service';

describe('InvoiceValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceValidationService = TestBed.get(InvoiceValidationService);
    expect(service).toBeTruthy();
  });
});
