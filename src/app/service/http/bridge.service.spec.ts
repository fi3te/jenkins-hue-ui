import { TestBed } from '@angular/core/testing';

import { BridgeService } from './bridge.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('BridgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: BridgeService = TestBed.get(BridgeService);
    expect(service).toBeTruthy();
  });
});
