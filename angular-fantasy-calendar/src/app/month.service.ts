import { EventEmitter, Injectable, Output } from '@angular/core';
import { CalendarEvent } from './calendarEvent';
import { CalendarSettings } from './calendarSettings';
import { DefaultDaysOfTheWeek } from './models/days-of-the-week';
import { Month } from './month';

const daySlots = [null, null, null, null, null, null, null];

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
    startingDayID: number, monthLength: number, startingDoW: number, eventArray: CalendarEvent[], daysPerWeek: number): Month {

    let currentWeekday = startingDoW;
    let week = 0;
    const month = {
      id: 0,
      weeks: []
    };
    for (let k = 0; k < ((monthLength + startingDoW) / daysPerWeek); k++) {
      month.weeks.push({id: k, days: daySlots.slice()});
    }
    let i = 0;
    while (i < monthLength) {
      console.log('generating day #' + i);
      month.weeks[week].days[currentWeekday] = {
        id: startingDayID + i, dayOfMonth: i + 1, events: this.getEventList(startingDayID + i, eventArray)};
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

  getNextStartingDoW(monthLength: number, startingDoW: number, daysPerWeek: number): DefaultDaysOfTheWeek {
    const newStartingDoW: number = (monthLength + startingDoW) % daysPerWeek;
    return newStartingDoW;
  }

  getNextStartingID(startingDayID: number, monthLength: number): number {
    return startingDayID + monthLength;
  }

  getPreviousStartingDoW(monthLength: number, startingDoW: number, daysPerWeek: number): DefaultDaysOfTheWeek {
    const newStartingDoW: number = ((startingDoW + daysPerWeek) - (monthLength % daysPerWeek)) % daysPerWeek;
    return newStartingDoW;
  }

  getPreviousStartingID(startingDayID: number, monthLength: number): number {
    return startingDayID - monthLength;
  }
}
