import { TestBed } from '@angular/core/testing';

import { JenkinsService } from './jenkins.service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('JenkinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [HttpClient, provideHttpClient(withInterceptorsFromDi())]
}));

  it('should be created', () => {
    const service: JenkinsService = TestBed.inject(JenkinsService);
    expect(service).toBeTruthy();
  });
});
