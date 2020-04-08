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
    expect(service.daysInYear([31, 29, 30], 2004, [
      {leapYearCycles: 4, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
      {leapYearCycles: 100, leapYearOffset: 0, leapYearChange: -1, leapDayMonth: 1},
      {leapYearCycles: 400, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
    ])).toBe(91);
  });

  it('should return correct math #2', () => {
    expect(service.daysInYear([31, 29, 30], 2100, [
      {leapYearCycles: 4, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
      {leapYearCycles: 100, leapYearOffset: 0, leapYearChange: -1, leapDayMonth: 1},
      {leapYearCycles: 400, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
    ])).toBe(90);
  });

  it('should return correct math #3', () => {
    expect(service.daysInYear([31, 29, 30], 2000, [
      {leapYearCycles: 4, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
      {leapYearCycles: 100, leapYearOffset: 0, leapYearChange: -1, leapDayMonth: 1},
      {leapYearCycles: 400, leapYearOffset: 0, leapYearChange: 1, leapDayMonth: 1},
    ])).toBe(91);
  });
});
