import { TestBed } from '@angular/core/testing';

import { KeyValuePairsService } from './key-value-pairs.service';

describe('KeyValuePairsService', () => {
  let service: KeyValuePairsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyValuePairsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
