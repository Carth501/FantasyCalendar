import { createAction, props } from '@ngrx/store';
import { Calendar } from 'src/app/Calendar';

export const setDirtyCalendars = createAction(
    '[Options] Set Dirty Calendars',
    props<{ calendars: Calendar[] }>()
);
