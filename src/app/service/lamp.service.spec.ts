import { TestBed } from '@angular/core/testing';

import { LampService } from './lamp.service';

describe('LampService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LampService = TestBed.get(LampService);
    expect(service).toBeTruthy();
  });
});
