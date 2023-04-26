import { TestBed } from '@angular/core/testing';

import { DaveService } from './dave.service';

describe('DaveService', () => {
  let service: DaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
