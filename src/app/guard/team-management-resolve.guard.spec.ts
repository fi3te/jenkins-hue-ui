import { TestBed, async, inject } from '@angular/core/testing';

import { TeamManagementResolveGuard } from './team-management-resolve.guard';

describe('TeamManagementResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamManagementResolveGuard]
    });
  });

  it('should ...', inject([TeamManagementResolveGuard], (guard: TeamManagementResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
