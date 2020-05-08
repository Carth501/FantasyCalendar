import { Action, createReducer, on } from '@ngrx/store';
import { OptionsActions } from '../actions';

export interface State {
    startingYear: number;
}

export const initialState: State = {
    startingYear: 2012,
};

const optionsReducer = createReducer(
    initialState,
    on(OptionsActions.setStartingYear, (state, {year}) => ({ ...state, startingYear: year})),
);

export function reducer(state: State | undefined, action: Action) {
    return optionsReducer(state, action);
}
