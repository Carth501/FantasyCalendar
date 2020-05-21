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

export const selectNewLeapYearPanelOpen = createSelector(
    selectOptions,
    ( state: State ) => state.newLeapYearPanel
);


export const selectEraEditingIndex = createSelector(
    selectOptions,
    ( state: State ) => state.eraEditingIndex
);

export const selectMonthEditingIndex = createSelector(
    selectOptions,
    ( state: State ) => state.monthEditingIndex
);

export const selectDayOfWeekEditingIndex = createSelector(
    selectOptions,
    ( state: State ) => state.dayOfWeekEditingIndex
);

export const selectLeapYearEditingIndex = createSelector(
    selectOptions,
    ( state: State ) => state.leapYearEditingIndex
);



/*
export const selectCurrentID = createSelector(
    selectOptions,
    ( state: State ) => state.currentCalendarID
);
*/
