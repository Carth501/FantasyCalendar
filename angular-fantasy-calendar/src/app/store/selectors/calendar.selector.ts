import { createSelector } from '@ngrx/store';
import { State } from '../reducers/calendar.reducer';

export interface AppState {
    calendar: State;
}

export const calendarView = (state: AppState) => state.calendar;

export const selectCalendars = createSelector(
    calendarView,
    ( state: State ) => {
        return state.calendarList;
    }
);

export const selectActiveCalendar = createSelector(
    calendarView,
    ( state: State ) => {
        return state.activeCalendar;
    }
);

export const selectTagList = createSelector(
    calendarView,
    ( state: State ) => {
        return state.tagList;
    }
);

export const selectFilter = createSelector(
    calendarView,
    ( state: State ) => {
        return state.currentFilter;
    }
);
