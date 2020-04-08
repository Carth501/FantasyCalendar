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
    startingDayID: number, daysPerMonths: number[],
    startingDoW: number, eventArray: CalendarEvent[], daysPerWeek: number,
    monthNames: string[], yearNumber: number
    ): Year {
    const year = {
      id: 0,
      yearNumber,
      months: []
    };
    let nextDayID = startingDayID;
    let nextDoW = startingDoW;
    let i = 0;
    while (i < monthNames.length) {
      year.months.push(this.monthService.getDisplayMonth(startingDayID, nextDayID,
            daysPerMonths[i], nextDoW, eventArray, daysPerWeek, monthNames[i]));

      nextDayID = this.monthService.getNextStartingID(nextDayID, daysPerMonths[i]);

      nextDoW = this.monthService.getNextStartingDoW(daysPerMonths[i], nextDoW, daysPerWeek);

      i++;
    }
    return year;
  }


  getNextStartingDoW(yearLength: number, startingDoW: number, daysPerWeek: number): number {
    const newStartingDoW: number = (yearLength + startingDoW) % daysPerWeek;
    return newStartingDoW;
  }

  getNextStartingID(startingDayID: number, yearLength: number): number {
    return startingDayID + yearLength;
  }

  getPreviousStartingDoW(yearLength: number, startingDoW: number, daysPerWeek: number): number {
    const newStartingDoW: number = ((startingDoW + daysPerWeek) - (yearLength % daysPerWeek)) % daysPerWeek;
    return newStartingDoW;
  }

  getPreviousStartingID(startingDayID: number, yearLength: number): number {
    return startingDayID - yearLength;
  }

  sumOfMonths(daysPerMonths: number[]): number {
    let sumOfMonths = 0;
    if (daysPerMonths.length > 0) {
      daysPerMonths.forEach(element => {
        sumOfMonths += element;
      });
    }
    return sumOfMonths;
  }

  daysInYear(daysPerMonths: number[], yearNumber: number, leapYearCycles: number[],
             leapYearChange: number[], leapYearStart: number[]): number {
      let total = this.sumOfMonths(daysPerMonths);
      for (let i = 0; i < leapYearCycles.length; i++) {
        if ((yearNumber - leapYearStart[i]) % leapYearCycles[i] === 0) {
          total += leapYearChange[i];
        }
      }
      return total;
    }
}
