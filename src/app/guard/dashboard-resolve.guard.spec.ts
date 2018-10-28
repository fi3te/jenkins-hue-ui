import { TestBed, async, inject } from '@angular/core/testing';

import { DashboardResolveGuard } from './dashboard-resolve.guard';

describe('DashboardResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardResolveGuard]
    });
  });

  it('should ...', inject([DashboardResolveGuard], (guard: DashboardResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
