import { TestBed } from '@angular/core/testing';

import { InfectedPcsService } from './infected-pcs.service';

describe('InfectedPcsService', () => {
  let service: InfectedPcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfectedPcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
