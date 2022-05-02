import { TestBed } from '@angular/core/testing';

import { TeamService } from './team.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('TeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: TeamService = TestBed.inject(TeamService);
    expect(service).toBeTruthy();
  });
});
