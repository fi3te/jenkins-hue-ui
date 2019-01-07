import { TestBed } from '@angular/core/testing';

import { LampService } from './lamp.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('LampService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: LampService = TestBed.get(LampService);
    expect(service).toBeTruthy();
  });
});
