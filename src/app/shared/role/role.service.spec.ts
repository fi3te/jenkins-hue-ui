import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RoleService } from './role.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('RoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [RoleService, HttpClient, NgbModal, provideHttpClient(withInterceptorsFromDi())]
}));

  it('should be created', () => {
    const service: RoleService = TestBed.inject(RoleService);
    expect(service).toBeTruthy();
  });
});
