import { TestBed } from '@angular/core/testing';

import { AccordionStateService } from './accordion-state.service';

describe('AccordionStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AccordionStateService]
  }));

  it('should be created', () => {
    const service: AccordionStateService<void> = TestBed.inject(AccordionStateService);
    expect(service).toBeTruthy();
  });
});
