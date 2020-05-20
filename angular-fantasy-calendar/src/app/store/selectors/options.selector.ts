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

export const selectNewEraPanelOpen = createSelector(
    selectOptions,
    ( state: State ) => state.newEraPanel
);

export const selectEraEditingIndex = createSelector(
    selectOptions,
    ( state: State ) => state.eraEditingIndex
);

/*
export const selectCurrentID = createSelector(
    selectOptions,
    ( state: State ) => state.currentCalendarID
);
*/
