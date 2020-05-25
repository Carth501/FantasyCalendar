import { Injectable } from '@angular/core';
import { MonthService } from './month.service';
import { Year } from './year';
import { LeapYear } from './leapYear';
import { SettingsMonth } from './settingsMonth';
import { Calendar } from './Calendar';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(
    private monthService: MonthService) { }


  getDisplayYear(
    startingDayID: number, startingDoW: number, yearNumber: number,
    calendar: Calendar
    ): Year {
    const year = {
      id: 0,
      yearNumber,
      months: [],
      DoW: calendar.DoW,
    };
    const months = calendar.months;
    const monthLengths = this.leapYearChange(yearNumber, months, calendar.leapYearRules);
    let nextDayID = startingDayID;
    let nextDoW = startingDoW;
    let month = 0;
    while (month < calendar.months.length) { // again, number of months in the year
      year.months.push(this.monthService.getDisplayMonth(startingDayID,
        nextDayID, monthLengths[month], months[month], nextDoW, calendar.DoW.length, month, calendar));

      nextDayID = this.monthService.getNextStartingID(nextDayID, monthLengths[month]);

      nextDoW = this.monthService.getNextStartingDoW(monthLengths[month], nextDoW, calendar.DoW.length);

      month++;
    }
    return year;
  }

  leapYearChange(yearNumber: number, months: SettingsMonth[], leapYears: LeapYear[]): number[] {
      const tempMonths: number[] = [];
      months.forEach(element => {
        tempMonths.push(element.length);
      });
      if (leapYears) {
        // if there are rules to follow
        for (let rule = 0; rule < leapYears.length; rule++) {
          // for each rule
          if ((yearNumber - leapYears[rule].leapYearOffset) % leapYears[rule].leapYearCycles === 0) {
            // if the year is in one of the rule's leap years
            for (let month = 0; month < tempMonths.length; month++) {
              // check each month
              if (leapYears[rule].leapDayMonth === month) {
                // if the month is the right month for a rule
                tempMonths[month] += leapYears[rule].leapYearChange;
              }
            }
          }
        }
      }
      return tempMonths;
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

  sumOfMonthLengths(settingsMonths: SettingsMonth[]): number {
    let sumOfMonths = 0;
    if (settingsMonths.length > 0) { // this is the number of elements in the array
      settingsMonths.forEach(element => {
        sumOfMonths += element.length; // this is the element's length value
      });
    }
    return sumOfMonths;
  }

  daysInYear(calendar: Calendar, yearNumber: number): number {
    let total = this.sumOfMonthLengths(calendar.months);
    const leapYearRules = calendar.leapYearRules;
    if (leapYearRules) {
      for (let i = 0; i < leapYearRules.length; i++) {
        if ((yearNumber - leapYearRules[i].leapYearOffset) % leapYearRules[i].leapYearCycles === 0) {
          total += leapYearRules[i].leapYearChange;
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
