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

export const setYearMath = createAction(
    '[Options] New Year Math',
    props<{ yearMath: YearMath }>()
);

export const setEventLists = createAction(
    '[Options] New Event Lists',
    props<{ eventLists: EventLists }>()
);

export const setLeapYears = createAction(
    '[Options] New Leap Year Rule',
    props<{ leapYears: LeapYear[] }>()
);

export const setMonths = createAction(
    '[Options] New Month List',
    props<{ settingsMonths: SettingsMonth[] }>()
);

export const setDoW = createAction(
    '[Options] New Day of Week List',
    props<{ DoW: string[] }>()
);

export const toggleNewEra = createAction(
    '[Options] Toggle New Era',
    props<{ }>()
);

export const eraEditingIndex = createAction(
    '[Options] Change Era Editing Index',
    props<{ eraEditingIndex: number }>()
);

export const monthEditingIndex = createAction(
    '[Options] Change Month Editing Index',
    props<{ monthEditingIndex: number }>()
);

export const dayOfWeekEditingIndex = createAction(
    '[Options] Change Day of Week Editing Index',
    props<{ dayOfWeekEditingIndex: number }>()
);
