import { TestBed } from '@angular/core/testing';

import { UserManagementService } from './user-management.service';

describe('UserManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserManagementService = TestBed.inject(UserManagementService);
    expect(service).toBeTruthy();
  });
});
