import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';

import { LampManagementResolveGuard } from './lamp-management-resolve.guard';

describe('LampManagementResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LampManagementResolveGuard, HttpClient]
    });
  });

  it('should ...', inject([LampManagementResolveGuard], (guard: LampManagementResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
