import { Injectable } from '@angular/core';
import { Calendar } from './Calendar';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor() { }

  calendarToJSON(calendar: Calendar): string {
    return JSON.stringify(calendar);
  }

  JSONToCalendar(json: string): Calendar {
    return JSON.parse(json);
  }
}
