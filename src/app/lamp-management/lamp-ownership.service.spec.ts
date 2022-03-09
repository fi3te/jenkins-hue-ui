import { TestBed } from '@angular/core/testing';

import { LampOwnershipService } from './lamp-ownership.service';

describe('LampOwnershipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LampOwnershipService = TestBed.inject(LampOwnershipService);
    expect(service).toBeTruthy();
  });
});
