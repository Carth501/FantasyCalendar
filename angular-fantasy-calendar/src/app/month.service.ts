import { EventEmitter, Injectable, Output } from '@angular/core';
import { CalendarEvent } from './calendarEvent';
import { CalendarSettings } from './calendarSettings';
import { DefaultDaysOfTheWeek } from './models/days-of-the-week';
import { Month } from './month';
import { Day } from './day';

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
    yearStartingDayID: number, monthStartingDayID: number, monthLength: number, startingDoW: number, eventArray: CalendarEvent[], daysPerWeek: number, monthName: string): Month {

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
      month.weeks[week].days[currentWeekday] = {
        id: monthStartingDayID + i,
        dayOfMonth: i + 1,
        dayOfYear: (monthStartingDayID + i) - yearStartingDayID + 1,
        events: this.getEventList(monthStartingDayID + i, eventArray)};
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

  getEventList(index: number, eventArray: CalendarEvent[]): CalendarEvent[] {
    const result: CalendarEvent[] = [];
    if (eventArray) {
      eventArray.forEach(calendarEvent => {
        if (index - calendarEvent.dateID >= 0) {
          if (calendarEvent.repeatDays === 0) {
            if (index - calendarEvent.dateID <= (calendarEvent.duration - 1)) {
              result.push(calendarEvent);
            }
          } else {
            if ((index - calendarEvent.dateID) % calendarEvent.repeatDays <= (calendarEvent.duration - 1)) {
              result.push(calendarEvent);
            }
          }
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
