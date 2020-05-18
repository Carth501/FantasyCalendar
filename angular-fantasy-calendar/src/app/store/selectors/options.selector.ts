import { createSelector } from '@ngrx/store';
import { State } from '../reducers/options.reducer';

export interface AppState {
    options: State;
}

export const selectOptions = (state: AppState) => state.options;


export const selectDirtyCalendar = createSelector(
    selectOptions,
    ( state: State ) => state.dirtySettings
);

/*
export const selectCurrentID = createSelector(
    selectOptions,
    ( state: State ) => state.currentCalendarID
);
*/
