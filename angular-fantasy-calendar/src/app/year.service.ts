import { Injectable } from '@angular/core';
import { CalendarEvent } from './calendarEvent';
import { MonthService } from './month.service';
import { Year } from './year';
import { LeapYear } from './leapYear';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(
    private monthService: MonthService) { }


  getDisplayYear(
    startingDayID: number, daysPerMonths: number[],
    startingDoW: number, eventArray: CalendarEvent[], daysPerWeek: number,
    monthNames: string[], yearNumber: number, leapYears: LeapYear[]
    ): Year {
    const year = {
      id: 0,
      yearNumber,
      months: []
    };
    const monthLengths = this.leapYearChange(yearNumber, daysPerMonths, leapYears);
    let nextDayID = startingDayID;
    let nextDoW = startingDoW;
    let i = 0;
    while (i < monthNames.length) {
      year.months.push(this.monthService.getDisplayMonth(startingDayID, nextDayID,
        monthLengths[i], nextDoW, eventArray, daysPerWeek, monthNames[i]));

      nextDayID = this.monthService.getNextStartingID(nextDayID, monthLengths[i]);

      nextDoW = this.monthService.getNextStartingDoW(monthLengths[i], nextDoW, daysPerWeek);

      i++;
    }
    return year;
  }

  leapYearChange(yearNumber: number, monthLengths: number[], leapYears: LeapYear[]): number[] {
      const newMonthLengths = monthLengths.slice();
      if (leapYears) {
        // if there are rules to follow
        for (let rule = 0; rule < leapYears.length; rule++) {
          // for each rule
          if ((yearNumber - leapYears[rule].leapYearOffset) % leapYears[rule].leapYearCycles === 0) {
            // if the year is in one of the rule's leap years
            for (let month = 0; month < monthLengths.length; month++) {
              // check each month
              if (leapYears[rule].leapDayMonth === month) {
                // if the month is the right month for a rule
                newMonthLengths[month] += leapYears[rule].leapYearChange;
              }
            }
          }
        }
      }
      return newMonthLengths;
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

  daysInYear(daysPerMonths: number[], yearNumber: number, leapYears: LeapYear[]): number {
    let total = this.sumOfMonths(daysPerMonths);
    if (daysPerMonths && leapYears) {
      for (let i = 0; i < leapYears.length; i++) {
        if ((yearNumber - leapYears[i].leapYearOffset) % leapYears[i].leapYearCycles === 0) {
          total += leapYears[i].leapYearChange;
        }
      }
    }
    return total;
  }

  isThisLeapYear(
    yearNumber: number, leapYears: LeapYear[]): boolean {
    for (let i = 0; i < leapYears.length; i++) {
      if (yearNumber && leapYears[i].leapYearCycles && leapYears[i].leapYearOffset) {
        if ((yearNumber - leapYears[i].leapYearOffset) % leapYears[i].leapYearCycles) {
          return true;
        }
      }
    }
    return false;
  }
}
