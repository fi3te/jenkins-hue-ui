import { TestBed } from '@angular/core/testing';

import { UniversalService } from './universal.service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('UniversalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [HttpClient, provideHttpClient(withInterceptorsFromDi())]
}));

  it('should be created', () => {
    const service: UniversalService = TestBed.inject(UniversalService);
    expect(service).toBeTruthy();
  });
});
