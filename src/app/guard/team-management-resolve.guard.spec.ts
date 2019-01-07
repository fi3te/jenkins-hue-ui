import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';

import { TeamManagementResolveGuard } from './team-management-resolve.guard';

describe('TeamManagementResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TeamManagementResolveGuard, HttpClient]
    });
  });

  it('should ...', inject([TeamManagementResolveGuard], (guard: TeamManagementResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
