import { TestBed } from '@angular/core/testing';

import { LampService } from './lamp.service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('LampService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [HttpClient, provideHttpClient(withInterceptorsFromDi())]
}));

  it('should be created', () => {
    const service: LampService = TestBed.inject(LampService);
    expect(service).toBeTruthy();
  });
});
