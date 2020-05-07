import { EventEmitter, Injectable, Output } from '@angular/core';
import { CalendarSettings } from './calendarSettings';
import { Day } from './day';
import { Month } from './month';
import { TotalSettings } from './totalSettings';
import { CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent, MonthlyDayOfWeekEvent,
  YearlyMonthlyDayOfWeekEvent, YearlyMonthlyEvent, UniqueEvent } from './calendarEvent';
import { SettingsMonth } from './settingsMonth';

@Injectable({
  providedIn: 'root'
})
export class MonthService {

  @Output() needRefresh = new EventEmitter<any>();

  calendarSettings: CalendarSettings;
  startingDayID: number;
  monthLength: number;
  startingDoW: number;

  constructor(  ) { }

  getDisplayMonth(
    yearStartingDayID: number, monthStartingDayID: number,
    monthLength: number, settingsMonth: SettingsMonth, startingDoW: number,
    daysPerWeek: number, monthNumber: number, totalSettings: TotalSettings): Month {

    let currentWeekday = startingDoW;
    let week = 0;
    const month = {
      id: 0,
      name: settingsMonth.name,
      weeks: []
    };
    for (let k = 0; k < ((monthLength + startingDoW) / daysPerWeek); k++) {
      month.weeks.push({id: k, days: this.createWeekProto(daysPerWeek)});
    }
    const weekdayCounts: number[] = [];
    for (let x = 0; x < daysPerWeek; x++) {
      weekdayCounts.push(0);
    }
    let i = 0;
    while (i < monthLength) {
      const dayOfMonth = i + 1;
      const dayOfYear = (monthStartingDayID + i) - yearStartingDayID + 1;
      month.weeks[week].days[currentWeekday] = {
        id: monthStartingDayID + i,
        dayOfMonth,
        dayOfYear,
        cyclicalEvents: this.getCyclicalEventList(monthStartingDayID + i,
                totalSettings.cyclicalEvents),
        uniqueEvents: this.getUniqueEventList(monthStartingDayID + dayOfMonth,
                totalSettings.uniqueEvents),
        weeklyEvents: this.getWeeklyEventList(currentWeekday,
                totalSettings.weeklyEvents),
        monthlyEvents: this.getMonthlyEventList(dayOfMonth,
                totalSettings.monthlyEvents),
        yearlyEvents: this.getYearlyEventList(dayOfYear,
                totalSettings.yearlyEvents),
        monthDOWEvents: this.getMonthDOWEventList(currentWeekday,
                weekdayCounts[currentWeekday], totalSettings.monthDOWEvents),
        yearMonthDOWEvents: this.getYearMonthDOWEventList(daysPerWeek,
                currentWeekday, monthNumber,
                weekdayCounts[currentWeekday], totalSettings.yearMonthDOWEvents),
        yearMonthlyEvents: this.getYearMonthlyEventList(dayOfMonth, monthNumber,
                totalSettings.yearlyMonthlyEvents)
      };
      weekdayCounts[currentWeekday]++;
      /*
      let message = '';
      weekdayCounts.forEach(value => message += ('| ' + value + ' |'));
      console.log(message);
      */
      if (currentWeekday === daysPerWeek - 1) {
        currentWeekday = 0;
        week++;
      } else {
        currentWeekday++;
      }
      i++;
    }
    return month;
  }

  createWeekProto(daysPerWeek: number): Day[] {
    const weekProto: Day[] = [];
    for (let v = 0; v < daysPerWeek; v++) {
      weekProto.push(null);
    }
    return weekProto;
  }

  getCyclicalEventList(index: number, cyclicalEvents: CyclicalEvent[]): CyclicalEvent[] {
    const result: CyclicalEvent[] = [];
    if (cyclicalEvents) {
      cyclicalEvents.forEach(calendarEvent => {
        if (index - calendarEvent.offset >= 0) {
          if (calendarEvent.repeatDays === 0) {
            if (index - calendarEvent.offset <= (calendarEvent.duration)) {
              result.push(calendarEvent);
            }
          } else {
            if ((index - calendarEvent.offset) % calendarEvent.repeatDays <= (calendarEvent.duration)) {
              result.push(calendarEvent);
            }
          }
        }
      });
    }
    return result;
  }

  getWeeklyEventList(dayOfWeek: number, weeklyEvents: WeeklyEvent[]): WeeklyEvent[] {
    const result: WeeklyEvent[] = [];
    if (weeklyEvents) {
      weeklyEvents.forEach(calendarEvent => {
        if (dayOfWeek === (calendarEvent.offset - 1)) {
          result.push(calendarEvent);
        }
      });
    }
    return result;
  }

  getMonthlyEventList(dayOfMonth: number, monthlyEvents: MonthlyEvent[]): MonthlyEvent[] {
    const result: MonthlyEvent[] = [];
    if (monthlyEvents) {
      monthlyEvents.forEach(calendarEvent => {
        if (dayOfMonth === calendarEvent.offset) {
          result.push(calendarEvent);
        }
      });
    }
    return result;
  }

  getYearlyEventList(dayOfYear: number, yearlyEvents: YearlyEvent[]): YearlyEvent[] {
    const result: YearlyEvent[] = [];
    if (yearlyEvents) {
      yearlyEvents.forEach(calendarEvent => {
        if (dayOfYear === calendarEvent.offset) {
          result.push(calendarEvent);
        }
      });
    }
    return result;
  }

  getMonthDOWEventList(dayOfWeek: number, weekdayCount: number, monthDOWEvents: MonthlyDayOfWeekEvent[]):
  MonthlyDayOfWeekEvent[] {
    const result: MonthlyDayOfWeekEvent[] = [];
    if (monthDOWEvents) {
      monthDOWEvents.forEach(calendarEvent => {
        if (weekdayCount === (calendarEvent.weekOffset - 1)) {
          if (dayOfWeek === (calendarEvent.offset - 1)) {
            result.push(calendarEvent);
          }
        }
      });
    }
    return result;
  }

  getYearMonthDOWEventList(daysPerWeek: number, dayOfWeek: number,
                           monthOfYear: number, weekdayCount: number, yearMonthDOWEvents: YearlyMonthlyDayOfWeekEvent[]):
                           YearlyMonthlyDayOfWeekEvent[] {
    const result: YearlyMonthlyDayOfWeekEvent[] = [];
    if (yearMonthDOWEvents) {
      yearMonthDOWEvents.forEach(calendarEvent => {
        if (monthOfYear === (calendarEvent.monthOffset - 1)) {
          if (weekdayCount === (calendarEvent.weekOffset - 1)) {
            if (dayOfWeek === (calendarEvent.offset - 1)) {
              result.push(calendarEvent);
            }
          }
          // check if the start happened less than the duration ago
          // rework this to use a continuous array to handle duration
          /*
          if (weekdayCount >= (calendarEvent.weekOffset - 1)) {
            const dayOfWeekDifference = (dayOfWeek - calendarEvent.offset);
            let inBetween = (daysPerWeek * (weekdayCount - calendarEvent.weekOffset));
            if (dayOfWeekDifference <= 0) { inBetween += daysPerWeek; }
            const daysSince = (dayOfWeekDifference + inBetween);
            if ( daysSince <= calendarEvent.duration && daysSince > 0) {
                result.push(calendarEvent);
            }
          } 
          */
        }
      });
    }
    return result;
  }

  getUniqueEventList(dayID: number, uniqueEvents: UniqueEvent[]): UniqueEvent[] {
    const result: UniqueEvent[] = [];
    if (uniqueEvents) {
      uniqueEvents.forEach(calendarEvent => {
        if (dayID === calendarEvent.offset + 1) {
          result.push(calendarEvent);
        }
      });
    }
    return result;
  }

  getYearMonthlyEventList(dayOfMonth: number, monthOfYear: number,
                          yearMonthlyEvents: YearlyMonthlyEvent[]): YearlyMonthlyEvent[] {
    const result: YearlyMonthlyEvent[] = [];
    if (yearMonthlyEvents) {
      yearMonthlyEvents.forEach(calendarEvent => {
        if (monthOfYear === (calendarEvent.monthOffset - 1)) {
          if (dayOfMonth === calendarEvent.offset) {
            result.push(calendarEvent);
          }
        }
      });
    }
    return result;
  }

  getNextStartingDoW(settingsMonth: SettingsMonth, startingDoW: number, daysPerWeek: number): number {
    const newStartingDoW: number = (settingsMonth.length + startingDoW) % daysPerWeek;
    return newStartingDoW;
  }

  getNextStartingID(startingDayID: number, monthLength: number): number {
    return startingDayID + monthLength;
  }

  getPreviousStartingDoW(monthLength: number, startingDoW: number, daysPerWeek: number): number {
    const newStartingDoW: number = ((startingDoW + daysPerWeek) - (monthLength % daysPerWeek)) % daysPerWeek;
    return newStartingDoW;
  }

  getPreviousStartingID(startingDayID: number, monthLength: number): number {
    return startingDayID - monthLength;
  }
}
