import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Calendar } from './Calendar';
import { Store } from '@ngrx/store';
import { selectCalendars } from './store/selectors/calendar.selector';
import { selectCalendarIndex } from './store/selectors/view.selector';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  private calenderSettingsURL = 'api/calendars';

  constructor(
    private http: HttpClient,
    private store: Store
    ) { }

  requestCalendar$(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(this.calenderSettingsURL);
  }

  getCurrentCalendar$(): Observable<Calendar> {
    return combineLatest([this.getCalendarList$(), this.getCurrentCalendarID$()]).pipe(
      map(([list, id]) => { if (!!list.length) {
        return list.find(calendar => calendar.calendarID === id);
      }})
    );
  }

  getCalendarList$(): Observable<Calendar[]> {
    return this.store.select(selectCalendars);
  }

  getCurrentCalendarID$(): Observable<number> {
    return this.store.select(selectCalendarIndex);
  }
}
