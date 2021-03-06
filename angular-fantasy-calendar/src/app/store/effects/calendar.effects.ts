import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs/operators';
import { CalendarService } from 'src/app/calendar.service';
import { setCalendarList } from '../actions/calendar.actions';

@Injectable()
export class CalendarEffects {

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private calendarService: CalendarService
  ) {}

  @Effect()
  loadCalendars$ = this.actions$.pipe(
    ofType('[Calendar Page] Load Calendar'),
    switchMap(() => this.calendarService.requestCalendar$()),
    map(newCalendarList => setCalendarList({newCalendarList}))
  );

}
