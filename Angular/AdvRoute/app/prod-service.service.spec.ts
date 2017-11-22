import { TestBed, inject } from '@angular/core/testing';

import { ProdServiceService } from './prod-service.service';

describe('ProdServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdServiceService]
    });
  });

  it('should be created', inject([ProdServiceService], (service: ProdServiceService) => {
    expect(service).toBeTruthy();
  }));
});
