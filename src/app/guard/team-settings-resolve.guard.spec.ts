import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { TeamSettingsResolveGuard } from './team-settings-resolve.guard';

describe('TeamSettingsResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [TeamSettingsResolveGuard, HttpClient, provideHttpClient(withInterceptorsFromDi())]
});
  });

  it('should ...', inject([TeamSettingsResolveGuard], (guard: TeamSettingsResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
