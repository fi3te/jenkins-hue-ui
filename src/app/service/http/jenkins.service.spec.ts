import { TestBed } from '@angular/core/testing';

import { JenkinsService } from './jenkins.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('JenkinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: JenkinsService = TestBed.get(JenkinsService);
    expect(service).toBeTruthy();
  });
});
