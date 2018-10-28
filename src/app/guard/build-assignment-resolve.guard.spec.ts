import { TestBed, async, inject } from '@angular/core/testing';

import { BuildAssignmentResolveGuard } from './build-assignment-resolve.guard';

describe('BuildAssignmentResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildAssignmentResolveGuard]
    });
  });

  it('should ...', inject([BuildAssignmentResolveGuard], (guard: BuildAssignmentResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
