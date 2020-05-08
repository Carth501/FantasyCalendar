import { createSelector } from '@ngrx/store';
import { State } from '../reducers/options.reducer';

export interface AppState {
    view: State;
}

export const selectView = (state: AppState) => state.view;

export const selectStartingYear = createSelector(
    selectView,
    ( state: State ) => state.startingYear
);
