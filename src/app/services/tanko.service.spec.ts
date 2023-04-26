import { TestBed } from '@angular/core/testing';

import { TankoService } from './tanko.service';

describe('TankoService', () => {
  let service: TankoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TankoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
