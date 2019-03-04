import { BsModalService } from 'ngx-bootstrap/modal';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RoleService } from './role.service';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('RoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, ModalModule.forRoot()],
    providers: [RoleService, HttpClient, BsModalService]
  }));

  it('should be created', () => {
    const service: RoleService = TestBed.get(RoleService);
    expect(service).toBeTruthy();
  });
});
