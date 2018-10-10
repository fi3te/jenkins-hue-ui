import { TestBed } from '@angular/core/testing';

import { UniversalService } from './universal.service';

describe('UniversalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniversalService = TestBed.get(UniversalService);
    expect(service).toBeTruthy();
  });
});
