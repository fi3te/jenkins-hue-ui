import { TestBed } from '@angular/core/testing';

import { TeamService } from './team.service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('TeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [HttpClient, provideHttpClient(withInterceptorsFromDi())]
}));

  it('should be created', () => {
    const service: TeamService = TestBed.inject(TeamService);
    expect(service).toBeTruthy();
  });
});
