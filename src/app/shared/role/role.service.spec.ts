import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RoleService } from './role.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('RoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [RoleService, HttpClient, NgbModal]
  }));

  it('should be created', () => {
    const service: RoleService = TestBed.inject(RoleService);
    expect(service).toBeTruthy();
  });
});
