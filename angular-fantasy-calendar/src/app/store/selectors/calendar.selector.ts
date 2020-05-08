import { createSelector } from '@ngrx/store';
import { State } from '../reducers/calendar.reducer';

export interface AppState {
    calendar: State;
}

export const calendarView = (state: AppState) => state.calendar;

export const selectTotalSettings = createSelector(
    calendarView,
    ( state: State ) => state.totalSettingsList
);
