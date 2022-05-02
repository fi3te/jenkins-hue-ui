import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('SessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: SessionService = TestBed.inject(SessionService);
    expect(service).toBeTruthy();
  });
});
