import { TestBed } from '@angular/core/testing';

import { UniversalService } from './universal.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('UniversalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: UniversalService = TestBed.get(UniversalService);
    expect(service).toBeTruthy();
  });
});
