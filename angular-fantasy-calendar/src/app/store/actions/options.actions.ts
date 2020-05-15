import { createAction, props } from '@ngrx/store';
import { Calendar } from 'src/app/Calendar';
import { YearMath } from 'src/app/yearMath';
import { EventLists } from 'src/app/calendarEvent';
import { LeapYear } from 'src/app/leapYear';
import { SettingsMonth } from 'src/app/settingsMonth';

export const setDirtyCalendar = createAction(
    '[Options] Set Dirty Calendar',
    props<{ calendar: Calendar }>()
);

