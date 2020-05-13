import { Injectable } from '@angular/core';
import { Lookup } from './lookup';
import { Calendar } from './Calendar';

@Injectable({
  providedIn: 'root'
})
export class KeyValuePairsService {

  constructor() { }

  pullLookupsFromCalendarList(calendars: Calendar[]): Lookup[] {
    const result: Lookup[] = [];
    calendars.forEach(calendar =>
      result.push({key: calendar.calendarID, value: calendar.calendarName}));
    return result;
  }
}
