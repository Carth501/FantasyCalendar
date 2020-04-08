import { Injectable } from '@angular/core';
import { MonthService } from './month.service';
import { Year } from './year';
import { CalendarEvent } from './calendarEvent';
import { runInContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(
    private monthService: MonthService) { }


  getDisplayYear(
    startingDayID: number, daysPerMonths: number[],
    startingDoW: number, eventArray: CalendarEvent[], daysPerWeek: number,
    monthNames: string[], yearNumber: number, leapYearCycles: number[],
    leapYearChange: number[], leapYearOffset: number[], leapDayMonth: number[]
    ): Year {
    const year = {
      id: 0,
      yearNumber,
      months: []
    };
    const monthLengths = this.leapYearChange(yearNumber, daysPerMonths, leapYearCycles,
                                    leapYearChange, leapYearOffset, leapDayMonth);
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

  leapYearChange(yearNumber: number, monthLengths: number[], leapYearCycles: number[],
    leapYearChange: number[], leapYearOffset: number[], leapDayMonth: number[]): number[] {
      const newMonthLengths = monthLengths.slice();
      if (leapYearCycles && leapYearChange && leapYearOffset && leapDayMonth) {
        // if all the rules are here
        for (let rule = 0; rule < leapYearCycles.length; rule++) {
          // for each rule
          if ((yearNumber - leapYearOffset[rule]) % leapYearCycles[rule] === 0) {
            // if the year is in one of the rule's leap years
            for (let month = 0; month < leapYearChange.length; month++) {
              // check each month
              if (leapDayMonth[rule] === month) {
                // if the month is the right month for a rule
                newMonthLengths[month] += leapYearChange[rule];;
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

  daysInYear(daysPerMonths: number[], yearNumber: number, leapYearCycles: number[],
             leapYearChange: number[], leapYearOffset: number[]): number {
    let total = this.sumOfMonths(daysPerMonths);
    if (daysPerMonths && leapYearCycles && leapYearChange && leapYearOffset) {
      for (let i = 0; i < leapYearCycles.length; i++) {
        if ((yearNumber - leapYearOffset[i]) % leapYearCycles[i] === 0) {
          console.log('this is leap year');
          total += leapYearChange[i];
        }
      }
    }
    return total;
  }

  isThisLeapYear(
    yearNumber: number, leapYearCycles: number[], leapYearOffset: number[]): boolean {
    if (yearNumber && leapYearCycles && leapYearOffset) {
      for (let i = 0; i < leapYearCycles.length; i++) {
        if ((yearNumber - leapYearOffset[i]) % leapYearCycles[i]) {
          return true;
        }
      }
    }
    return false;
  }
}
