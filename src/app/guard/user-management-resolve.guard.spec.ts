import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { UserManagementResolveGuard } from './user-management-resolve.guard';

describe('UserManagementResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [UserManagementResolveGuard, HttpClient, provideHttpClient(withInterceptorsFromDi())]
});
  });

  it('should ...', inject([UserManagementResolveGuard], (guard: UserManagementResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
