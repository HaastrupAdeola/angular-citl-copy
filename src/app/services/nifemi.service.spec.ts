import { TestBed } from '@angular/core/testing';

import { NifemiService } from './nifemi.service';

describe('NifemiService', () => {
  let service: NifemiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NifemiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
