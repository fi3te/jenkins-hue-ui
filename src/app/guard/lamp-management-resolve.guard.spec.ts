import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { LampManagementResolveGuard } from './lamp-management-resolve.guard';

describe('LampManagementResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [LampManagementResolveGuard, HttpClient, provideHttpClient(withInterceptorsFromDi())]
});
  });

  it('should ...', inject([LampManagementResolveGuard], (guard: LampManagementResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
