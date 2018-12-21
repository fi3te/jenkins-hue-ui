import { TestBed } from '@angular/core/testing';

import { AccordionStateService } from './accordion-state.service';

describe('AccordionStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccordionStateService<void> = TestBed.get(AccordionStateService);
    expect(service).toBeTruthy();
  });
});
