import { TestBed } from '@angular/core/testing';

import { BridgeService } from './bridge.service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('BridgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [HttpClient, provideHttpClient(withInterceptorsFromDi())]
}));

  it('should be created', () => {
    const service: BridgeService = TestBed.inject(BridgeService);
    expect(service).toBeTruthy();
  });
});
