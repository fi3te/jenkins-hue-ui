import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { UserManagementResolveGuard } from './user-management-resolve.guard';

describe('UserManagementResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserManagementResolveGuard, HttpClient]
    });
  });

  it('should ...', inject([UserManagementResolveGuard], (guard: UserManagementResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
