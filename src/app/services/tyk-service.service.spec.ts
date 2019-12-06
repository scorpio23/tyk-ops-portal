import { TestBed } from '@angular/core/testing';

import { TykAPIService } from './tyk-api.service';

describe('TykServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TykAPIService = TestBed.get(TykAPIService);
    expect(service).toBeTruthy();
  });
});
