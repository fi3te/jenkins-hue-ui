import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { BuildAssignmentResolveGuard } from './build-assignment-resolve.guard';

describe('BuildAssignmentResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BuildAssignmentResolveGuard, HttpClient]
    });
  });

  it('should ...', inject([BuildAssignmentResolveGuard], (guard: BuildAssignmentResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
