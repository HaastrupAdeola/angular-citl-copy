import { TestBed } from '@angular/core/testing';

import { AdeolaService } from './adeola.service';

describe('AdeolaService', () => {
  let service: AdeolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdeolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
