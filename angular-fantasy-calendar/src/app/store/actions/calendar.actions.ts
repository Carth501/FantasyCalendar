import { createAction, props } from '@ngrx/store';
import { Calendar } from 'src/app/Calendar';

export const pushCalendar = createAction(
    '[Calendar] Push Calendar',
    props<{ newCalendar: Calendar }>()
);

export const setCalendarList = createAction(
    '[Calendar] Set Calendar List',
    props<{ newCalendarList: Calendar[] }>()
);
