import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarSettings } from './calendarSettings';
import { HttpClient } from '@angular/common/http';
import { CalendarEvent } from './calendarEvent';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  private calenderSettingsURL = 'api/calendarSettings';
  private calenderEventsURL = 'api/calendarEvents';

  constructor(
    private http: HttpClient
    ) { }

  requestCalendarSettings(): Observable<CalendarSettings> {
    return this.http.get<CalendarSettings>(this.calenderSettingsURL);
  }

  requestEvents(): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(this.calenderEventsURL);
  }
}
