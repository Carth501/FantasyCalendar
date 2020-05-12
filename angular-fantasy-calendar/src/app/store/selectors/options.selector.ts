import { createSelector } from '@ngrx/store';
import { State } from '../reducers/options.reducer';

export interface AppState {
    options: State;
}

export const selectOptions = (state: AppState) => state.options;

export const selectCurrentCalendar = createSelector(
    selectOptions,
    ( state: State ) => state.dirtySettingsList.find(calendar => calendar.calendarID === state.currentCalendarID.valueOf())
);

export const selectCurrentID = createSelector(
    selectOptions,
    ( state: State ) => state.currentCalendarID
);
