import { TestBed, async, inject } from '@angular/core/testing';

import { TeamSettingsResolveGuard } from './team-settings-resolve.guard';

describe('TeamSettingsResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamSettingsResolveGuard]
    });
  });

  it('should ...', inject([TeamSettingsResolveGuard], (guard: TeamSettingsResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
