import { createAction, props } from '@ngrx/store';
import { Calendar } from 'src/app/Calendar';

export const setSettings = createAction(
    '[Options] Set Calendar',
    props<{ newCalendar: Calendar }>()
);
