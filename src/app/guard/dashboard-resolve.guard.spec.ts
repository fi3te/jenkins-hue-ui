import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { DashboardResolveGuard } from './dashboard-resolve.guard';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('DashboardResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [DashboardResolveGuard, HttpClient, provideHttpClient(withInterceptorsFromDi())]
});
  });

  it('should ...', inject([DashboardResolveGuard], (guard: DashboardResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
