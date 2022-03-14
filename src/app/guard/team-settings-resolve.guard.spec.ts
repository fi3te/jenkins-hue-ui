import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { TeamSettingsResolveGuard } from './team-settings-resolve.guard';

describe('TeamSettingsResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TeamSettingsResolveGuard, HttpClient]
    });
  });

  it('should ...', inject([TeamSettingsResolveGuard], (guard: TeamSettingsResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
