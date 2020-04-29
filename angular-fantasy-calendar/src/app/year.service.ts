import { Injectable } from '@angular/core';
import { MonthService } from './month.service';
import { Year } from './year';
import { LeapYear } from './leapYear';
import { TotalSettings } from './totalSettings';
import { SettingsMonth } from './settingsMonth';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(
    private monthService: MonthService) { }


  getDisplayYear(
    startingDayID: number, settingsMonths: SettingsMonth[],
    startingDoW: number, daysPerWeek: number, yearNumber: number,
    leapYears: LeapYear[],
    totalSettings: TotalSettings
    ): Year {
    const year = {
      id: 0,
      yearNumber,
      months: []
    };
    const monthLengths = this.leapYearChange(yearNumber, settingsMonths, leapYears);
    let nextDayID = startingDayID;
    let nextDoW = startingDoW;
    let month = 0;
    while (month < settingsMonths.length) { // again, number of months in the year
      year.months.push(this.monthService.getDisplayMonth(startingDayID,
        nextDayID, monthLengths[month], settingsMonths[month], nextDoW, daysPerWeek, month, totalSettings));

      nextDayID = this.monthService.getNextStartingID(nextDayID, monthLengths[month]);

      nextDoW = this.monthService.getNextStartingDoW(settingsMonths[month], nextDoW, daysPerWeek);

      month++;
    }
    return year;
  }

  leapYearChange(yearNumber: number, settingsMonths: SettingsMonth[], leapYears: LeapYear[]): number[] {
      const tempMonths: number[] = [];
      settingsMonths.forEach(element => {
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

  daysInYear(settingsMonths: SettingsMonth[], yearNumber: number, leapYears: LeapYear[]): number {
    let total = this.sumOfMonthLengths(settingsMonths);
    if (leapYears) {
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
