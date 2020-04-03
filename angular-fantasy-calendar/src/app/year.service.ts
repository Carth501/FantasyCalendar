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
    const remainder = daysPerYear % daysPerMonth;
    const monthsPerYear = Math.floor(daysPerYear / daysPerMonth);
    console.log('months per year: ' + monthsPerYear);
    let nextDayID = startingDayID;
    let nextDoW = startingDoW;
    let i = 0;
    while (i < monthsPerYear) {
      year.months.push(this.monthService.getDisplayMonth(startingDayID, nextDayID, daysPerMonth, nextDoW, eventArray, daysPerWeek, monthNames[i]));

      nextDayID = this.monthService.getNextStartingID(nextDayID, daysPerMonth);

      nextDoW = this.monthService.getNextStartingDoW(daysPerMonth, nextDoW, daysPerWeek);

      i++;
    }
    if (remainder > 0) {
      year.months.push(this.monthService.getDisplayMonth(startingDayID, nextDayID, remainder, nextDoW, eventArray, daysPerWeek, monthNames[i]));
      nextDayID = this.monthService.getNextStartingID(nextDayID, remainder);
      nextDoW = this.monthService.getNextStartingDoW(remainder, nextDoW, daysPerWeek);
    }
    return year;
  }
}
