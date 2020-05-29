import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, throwError } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Calendar } from './Calendar';
import { KeyValuePairsService } from './key-value-pairs.service';
import { Lookup } from './lookup';
import { pushCalendar } from './store/actions/calendar.actions';
import { CalendarSelectors } from './store/selectors';
import { selectCalendars } from './store/selectors/calendar.selector';
import { selectCalendarIndex } from './store/selectors/view.selector';
import { EventLists } from './calendarEvent';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  private calenderSettingsURL = 'api/calendars';

  constructor(
    private http: HttpClient,
    private store: Store,
    private keyValuePairsService: KeyValuePairsService
    ) { }

  requestCalendar$(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(this.calenderSettingsURL);
  }

  getCurrentCalendar$(): Observable<Calendar> {
    return combineLatest([this.getCalendarList$(), this.getCurrentCalendarID$()]).pipe(
      map(([list, id]) => {
        if (!!list.length) {
          return list.find(calendar => calendar.calendarID === id);
        } else {
          return null;
        }}),
      filter(calendar => !!calendar)
    );
  }

  getCalendarByID$(id: number): Observable<Calendar> {
    const result = this.getCalendarList$().pipe(
      filter(calendars => !!calendars),
      map(calendars => calendars.find(c => c.calendarID === id)),
      tap (calendar => {
        if (!calendar) {
          throwError(`ID ${id} not vaild.`);
        }
      })
    );
    return result;
  }

  getCalendarList$(): Observable<Calendar[]> {
    return this.store.select(selectCalendars);
  }

  getCurrentCalendarID$(): Observable<number> {
    return this.store.select(selectCalendarIndex);
  }

  getCalendarKVP$(): Observable<Lookup[]> {
    return this.store.select(CalendarSelectors.selectCalendars).pipe(
      map(calendars =>
        this.keyValuePairsService.pullLookupsFromCalendarList(calendars))
    );
  }

  addNewCalendar(newCalendar: Calendar): void {
    this.store.dispatch(pushCalendar({newCalendar}));
  }

  generateTagList(eventLists: EventLists): string[] {
    const result = [];
    eventLists.cyclicalEvents.forEach(event => {
      if (!!event.tags) {
        event.tags.forEach(tag => {
          if (!result.includes(tag)) {
            result.push(tag);
          }
        });
      }
    });
    eventLists.monthDOWEvents.forEach(event => {
      if (!!event.tags) {
        event.tags.forEach(tag => {
          if (!result.includes(tag)) {
            result.push(tag);
          }
        });
      }
    });
    eventLists.monthlyEvents.forEach(event => {
      if (!!event.tags) {
        event.tags.forEach(tag => {
          if (!result.includes(tag)) {
            result.push(tag);
          }
        });
      }
    });
    console.log('unique event list found:' + !!eventLists.uniqueEvents);
    eventLists.uniqueEvents.forEach(event => {
      console.log('tag list found:' + !!event.tags);
      if (!!event.tags) {
        event.tags.forEach(tag => {
          console.log('tag:' + tag);
          if (!result.includes(tag)) {
            result.push(tag);
          }
        });
      }
    });
    eventLists.weeklyEvents.forEach(event => {
      if (!!event.tags) {
        event.tags.forEach(tag => {
          if (!result.includes(tag)) {
            result.push(tag);
          }
        });
      }
    });
    eventLists.yearMonthDOWEvents.forEach(event => {
      if (!!event.tags) {
        event.tags.forEach(tag => {
          if (!result.includes(tag)) {
            result.push(tag);
          }
        });
      }
    });
    eventLists.yearlyEvents.forEach(event => {
      if (!!event.tags) {
        event.tags.forEach(tag => {
          if (!result.includes(tag)) {
            result.push(tag);
          }
        });
      }
    });
    eventLists.yearlyMonthlyEvents.forEach(event => {
      if (!!event.tags) {
        event.tags.forEach(tag => {
          if (!result.includes(tag)) {
            result.push(tag);
          }
        });
      }
    });
    return result;
  }
}
