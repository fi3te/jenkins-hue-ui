import { TestBed } from '@angular/core/testing';

import { TeamManagementService } from './team-management.service';

describe('TeamManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamManagementService = TestBed.inject(TeamManagementService);
    expect(service).toBeTruthy();
  });
});
