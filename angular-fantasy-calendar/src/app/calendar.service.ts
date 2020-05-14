import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Calendar } from './Calendar';
import { selectCalendars } from './store/selectors/calendar.selector';
import { selectCalendarIndex } from './store/selectors/view.selector';

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
      }}),
      filter(calendar => !!calendar)
    );
  }

  getCalendarList$(): Observable<Calendar[]> {
    return this.store.select(selectCalendars);
  }

  getCurrentCalendarID$(): Observable<number> {
    return this.store.select(selectCalendarIndex);
  }
}
