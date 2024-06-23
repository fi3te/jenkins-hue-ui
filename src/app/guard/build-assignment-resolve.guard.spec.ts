import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { BuildAssignmentResolveGuard } from './build-assignment-resolve.guard';

describe('BuildAssignmentResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [BuildAssignmentResolveGuard, HttpClient, provideHttpClient(withInterceptorsFromDi())]
});
  });

  it('should ...', inject([BuildAssignmentResolveGuard], (guard: BuildAssignmentResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
