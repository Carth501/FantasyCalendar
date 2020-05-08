import { createSelector } from '@ngrx/store';
import { State } from '../reducers/view.reducer';

export interface AppState {
    view: State;
}

export const selectView = (state: AppState) => state.view;

export const selectOptionsOpen = createSelector(
    selectView,
    ( state: State ) => state.optionsOpen
);

export const selectNewEventOpen = createSelector(
    selectView,
    ( state: State ) => state.newEventOpen
);

export const selectNewEventDayID = createSelector(
    selectView,
    ( state: State ) => state.dayID
);
