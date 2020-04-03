import { Injectable } from '@angular/core';
import { MonthService } from './month.service';
import { Year } from './year';
import { CalendarEvent } from './calendarEvent';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(
    private monthService: MonthService) { }


  getDisplayYear(
    daysPerYear: number, startingDayID: number, daysPerMonth: number, startingDoW: number, eventArray: CalendarEvent[], daysPerWeek: number, monthNames: string[]
    ): Year {
    const year = {
      id: 0,
      months: []
    };
    let monthsPerYear = daysPerYear / daysPerMonth;
    const remainder = daysPerYear % daysPerMonth;
    if (remainder !== 0) {
      monthsPerYear++;
    }
    let nextDayID = startingDayID;
    let nextDoW = startingDoW;
    let i = 0;
    while (i < monthsPerYear) {
      year.months.push(this.monthService.getDisplayMonth(nextDayID, daysPerMonth, nextDoW, eventArray, daysPerWeek, monthNames[i]));

      nextDayID = this.monthService.getNextStartingID(nextDayID, daysPerMonth);

      nextDoW = this.monthService.getNextStartingDoW(daysPerMonth, nextDoW, daysPerWeek);

      i++;
    }
    return year;
  }
}
