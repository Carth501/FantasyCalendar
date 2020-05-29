import { Injectable } from '@angular/core';
import { Day } from './day';
import { Observable } from 'rxjs';
import { selectFilter } from './store/selectors/calendar.selector';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { CalendarEvent } from './calendarEvent';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor(
    private store: Store,
  ) {

  }

  isMatching$(tags: string[]): Observable<boolean> {
    return this.store.select(selectFilter).pipe(
      map(filter => tags.filter(tag => filter.includes(tag))),
      map(matches => matches.length > 0)
    );
  }

  getBubbles$(events: CalendarEvent[]): Observable<string[]> {
    return this.store.select(selectFilter).pipe(
      map(filter => this.getMatchingEvents(events, filter)),
      map(matching => matching.map(event => event.title))
    );
  }

  getMatchingEvents(events: CalendarEvent[], filter: string[]): CalendarEvent[] {
    // if (filter.length === 0) {
    //   return events;
    // }
    return events.filter(event => this.eventMatchesFilter(event, filter));
  }
  eventMatchesFilter(event: CalendarEvent, filter: string[]): boolean {
    return (event.tags || []).filter(tag => filter.includes(tag)).length > 0;
  }

  getAllEvents(day: Day): CalendarEvent[] {
    return [
      ...(day.cyclicalEvents || []),
      ...(day.uniqueEvents || []),
      ...(day.yearMonthlyEvents || []),
      ...(day.yearMonthDOWEvents || []),
      ...(day.yearlyEvents || []),
      ...(day.monthlyEvents || []),
      ...(day.weeklyEvents || []),
      ...(day.monthDOWEvents || [])
    ];
  }

}
