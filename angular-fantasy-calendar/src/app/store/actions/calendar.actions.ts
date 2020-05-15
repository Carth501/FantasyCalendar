import { createAction, props } from '@ngrx/store';
import { Calendar } from 'src/app/Calendar';
import { YearMath } from 'src/app/yearMath';
import { EventLists } from 'src/app/calendarEvent';
import { LeapYear } from 'src/app/leapYear';
import { SettingsMonth } from 'src/app/settingsMonth';

export const setActiveCalendar = createAction(
    '[Calendar] Set Active Calendar',
    props<{ activeCalendar: Calendar }>()
);

export const pushCalendar = createAction(
    '[Calendar] Push Calendar',
    props<{ newCalendar: Calendar }>()
);

export const setCalendarList = createAction(
    '[Calendar] Set Calendar List',
    props<{ newCalendarList: Calendar[] }>()
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
