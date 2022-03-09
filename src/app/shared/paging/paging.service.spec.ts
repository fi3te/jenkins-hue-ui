import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PagingService } from './paging.service';

describe('PagingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [PagingService, HttpClient]
  }));

  it('should be created', () => {
    const service: PagingService<any> = TestBed.inject(PagingService);
    expect(service).toBeTruthy();
  });
});
