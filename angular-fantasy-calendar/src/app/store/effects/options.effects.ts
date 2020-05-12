import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { CalendarService } from 'src/app/calendar.service';
import { CalendarActions, OptionsActions } from '../actions';

@Injectable()
export class OptionsEffects {

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private calendarService: CalendarService
  ) {}

  @Effect()
  copyCalendars$ = this.actions$.pipe(
    ofType(CalendarActions.setCalendarList),
    map(({newCalendarList: calendars}) =>
        OptionsActions.setDirtyCalendars({calendars} ))
  );
}
