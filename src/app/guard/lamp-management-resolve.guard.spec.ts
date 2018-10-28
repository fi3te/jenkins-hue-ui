import { TestBed, async, inject } from '@angular/core/testing';

import { LampManagementResolveGuard } from './lamp-management-resolve.guard';

describe('LampManagementResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LampManagementResolveGuard]
    });
  });

  it('should ...', inject([LampManagementResolveGuard], (guard: LampManagementResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
