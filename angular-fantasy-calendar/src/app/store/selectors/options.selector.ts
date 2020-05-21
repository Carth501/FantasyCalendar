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

export const selectNewEventPanelOpen = createSelector(
    selectOptions,
    ( state: State ) => state.newEventPanel
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

export const selectYearOptionsOpen = createSelector(
    selectOptions,
    ( state: State ) => state.yearOptionsOpen
);

export const selectMonthOptionsOpen = createSelector(
    selectOptions,
    ( state: State ) => state.monthOptionsOpen
);

export const selectWeekOptionsOpen = createSelector(
    selectOptions,
    ( state: State ) => state.weekOptionsOpen
);

export const selectLeapYearOptionsOpen = createSelector(
    selectOptions,
    ( state: State ) => state.leapYearOptionsOpen
);

export const selectEventOptionsOpen = createSelector(
    selectOptions,
    ( state: State ) => state.eventOptionsOpen
);

export const selectJSONOptionsOpen = createSelector(
    selectOptions,
    ( state: State ) => state.jsonOptionsOpen
);


/*
export const selectCurrentID = createSelector(
    selectOptions,
    ( state: State ) => state.currentCalendarID
);
*/
