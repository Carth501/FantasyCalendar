import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
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

  private calenderEventsURL = 'api/calendarEvents';
  private calenderSettingsURL = 'api/calendarSettings';
  calendarSettings: CalendarSettings;
  startingDayID: number;
  monthLength: number;
  startingDoW: DefaultDaysOfTheWeek;

  constructor(
    private http: HttpClient
  ) { }

  getDisplayMonth(startingDayID: number, monthLength: number, startingDoW: DefaultDaysOfTheWeek, eventArray: CalendarEvent[]): Month {
    let currentWeekday = startingDoW;
    let week = 0;
    const month = {
      id: 0,
      weeks: []
    };
    for (let k = 0; k < ((monthLength + startingDoW) / 7); k++) {
      month.weeks.push({id: k, days: daySlots.slice()});
    }
    let i = 0;
    while (i < monthLength) {
      month.weeks[week].days[currentWeekday] = {
        id: startingDayID + i, dayOfMonth: i + 1, events: this.getEventList(startingDayID + i, eventArray)};
      if (currentWeekday === 6) {
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

  getNextStartingDoW(monthLength: number, startingDoW: DefaultDaysOfTheWeek): DefaultDaysOfTheWeek {
    const newStartingDoW: DefaultDaysOfTheWeek = (monthLength + startingDoW) % 7;
    return newStartingDoW;
  }

  getNextStartingID(startingDayID: number, monthLength: number): number {
    return startingDayID + monthLength;
  }

  getPreviousStartingDoW(monthLength: number, startingDoW: DefaultDaysOfTheWeek): DefaultDaysOfTheWeek {
    const newStartingDoW: DefaultDaysOfTheWeek = ((startingDoW + 7) - (monthLength % 7)) % 7;
    return newStartingDoW;
  }

  getPreviousStartingID(startingDayID: number, monthLength: number): number {
    return startingDayID - monthLength;
  }


  requestEvents(): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(this.calenderEventsURL);
  }

/*
  setCalendarSettings(): void {
    this.requestCalendarSettings().subscribe(IncomingSettings => this.calendarSettings = IncomingSettings);
  }

  requestCalendarSettings(): Observable<CalendarSettings> {
    return this.http.get<CalendarSettings>(this.calenderSettingsURL);
  }
  */
}
