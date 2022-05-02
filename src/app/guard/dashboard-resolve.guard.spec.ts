import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { DashboardResolveGuard } from './dashboard-resolve.guard';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('DashboardResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DashboardResolveGuard, HttpClient]
    });
  });

  it('should ...', inject([DashboardResolveGuard], (guard: DashboardResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
