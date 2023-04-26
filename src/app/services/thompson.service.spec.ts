import { TestBed } from '@angular/core/testing';

import { ThompsonService } from './thompson.service';

describe('ThompsonService', () => {
  let service: ThompsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThompsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
