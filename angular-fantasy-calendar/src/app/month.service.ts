import { EventEmitter, Injectable, Output } from '@angular/core';
import { CalendarSettings } from './calendarSettings';
import { Day } from './day';
import { Month } from './month';
import { TotalSettings } from './totalSettings';
import { CyclicalEvent, WeeklyEvent, MonthlyEvent, YearlyEvent } from './calendarEvent';

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
    yearStartingDayID: number, monthStartingDayID: number, monthLength: number,
    startingDoW: number, daysPerWeek: number, monthName: string, totalSettings: TotalSettings): Month {

    let currentWeekday = startingDoW;
    let week = 0;
    const month = {
      id: 0,
      name: monthName,
      weeks: []
    };
    for (let k = 0; k < ((monthLength + startingDoW) / daysPerWeek); k++) {
      month.weeks.push({id: k, days: this.createWeekProto(daysPerWeek)});
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
        weeklyEvents: this.getWeeklyEventList(currentWeekday,
                totalSettings.weeklyEvents),
        monthlyEvents: this.getMonthlyEventList(dayOfMonth, totalSettings.
                monthlyEvents),
        yearlyEvents: this.getYearlyEventList(dayOfYear, totalSettings.
                yearlyEvents)
      };
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
            if (index - calendarEvent.offset <= (calendarEvent.duration - 1)) {
              result.push(calendarEvent);
            }
          } else {
            if ((index - calendarEvent.offset) % calendarEvent.repeatDays <= (calendarEvent.duration - 1)) {
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
        if (dayOfWeek === calendarEvent.offset) {
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

  getNextStartingDoW(monthLength: number, startingDoW: number, daysPerWeek: number): number {
    const newStartingDoW: number = (monthLength + startingDoW) % daysPerWeek;
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
