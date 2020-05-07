import { Action, createReducer, on } from '@ngrx/store';
import { ViewActions } from '../actions';

export interface State {
    optionsOpen: false;
    newEventOpen: false;
    dayID: number;
}

export const initialState: State = {
    optionsOpen: false,
    newEventOpen: false,
    dayID: 0,
};

const viewReducer = createReducer(
    initialState,
    on(ViewActions.toggleOptions, state => ({ ...state, optionsOpen: !state.optionsOpen})),
    on(ViewActions.setNewEventPanel, (state, {open, dayID}) => ({ ...state, newEventOpen: open, dayID }))
);

export function reducer(state: State | undefined, action: Action) {
    return viewReducer(state, action);
}
