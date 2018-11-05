import { TestBed } from '@angular/core/testing';

import { BridgeOwnershipService } from './bridge-ownership.service';

describe('BridgeOwnershipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BridgeOwnershipService = TestBed.get(BridgeOwnershipService);
    expect(service).toBeTruthy();
  });
});
