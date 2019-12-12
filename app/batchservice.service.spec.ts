import { TestBed } from '@angular/core/testing';

import { BatchserviceService } from './batchservice.service';

describe('BatchserviceService', () => {
  let service: BatchserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
