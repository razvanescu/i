import { TestBed } from '@angular/core/testing';

import { BaseServerApiService } from './base-server-api.service';

describe('BaseServerApiService', () => {
  let service: BaseServerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseServerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
