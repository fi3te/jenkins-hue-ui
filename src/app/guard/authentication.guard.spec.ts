import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [AuthenticationGuard, HttpClient, provideHttpClient(withInterceptorsFromDi())]
});
  });

  it('should ...', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
