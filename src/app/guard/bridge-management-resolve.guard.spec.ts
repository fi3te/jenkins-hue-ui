import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { BridgeManagementResolveGuard } from './bridge-management-resolve.guard';

describe('BridgeManagementResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [BridgeManagementResolveGuard, HttpClient, provideHttpClient(withInterceptorsFromDi())]
});
  });

  it('should ...', inject([BridgeManagementResolveGuard], (guard: BridgeManagementResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
