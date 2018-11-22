import { TestBed, async, inject } from '@angular/core/testing';

import { BridgeManagementResolveGuard } from './bridge-management-resolve.guard';

describe('BridgeManagementResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BridgeManagementResolveGuard]
    });
  });

  it('should ...', inject([BridgeManagementResolveGuard], (guard: BridgeManagementResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
