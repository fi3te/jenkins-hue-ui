import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';

import { BridgeManagementResolveGuard } from './bridge-management-resolve.guard';

describe('BridgeManagementResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BridgeManagementResolveGuard, HttpClient]
    });
  });

  it('should ...', inject([BridgeManagementResolveGuard], (guard: BridgeManagementResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
