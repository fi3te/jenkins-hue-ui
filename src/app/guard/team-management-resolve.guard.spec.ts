import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { TeamManagementResolveGuard } from './team-management-resolve.guard';

describe('TeamManagementResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [TeamManagementResolveGuard, HttpClient, provideHttpClient(withInterceptorsFromDi())]
});
  });

  it('should ...', inject([TeamManagementResolveGuard], (guard: TeamManagementResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
