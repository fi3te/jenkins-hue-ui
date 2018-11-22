import { TestBed, async, inject } from '@angular/core/testing';

import { UserManagementResolveGuard } from './user-management-resolve.guard';

describe('UserManagementResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserManagementResolveGuard]
    });
  });

  it('should ...', inject([UserManagementResolveGuard], (guard: UserManagementResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
