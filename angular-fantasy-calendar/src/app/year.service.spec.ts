import { TestBed } from '@angular/core/testing';

import { YearService } from './year.service';

describe('YearService', () => {
  let service: YearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct math #1', () => {
    expect(service.daysInYear([31, 29, 30], 2002, [2, 15, 40],
      [1, -1, 1], [0, 0, 1])).toBe(91);
  });

  it('should return correct math #2', () => {
    expect(service.daysInYear([31, 29, 30], 2010, [2, 15, 40],
      [1, -1, 1], [0, 0, 1])).toBe(90);
  });

  it('should return correct math #3', () => {
    expect(service.daysInYear([31, 29, 30], 2011, [2, 15, 40],
      [1, -1, 1], [0, 0, 1])).toBe(90);
  });
});
