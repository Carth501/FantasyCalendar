import { createSelector } from '@ngrx/store';
import { State } from '../reducers/options.reducer';

export interface AppState {
    options: State;
}

export const selectOptions = (state: AppState) => state.options;

export const selectSettings = createSelector(
    selectOptions,
    ( state: State ) => state.dirtySettings
);
