import { Action, createReducer, on } from '@ngrx/store';
import { OptionsActions } from '../actions';
import { Calendar } from 'src/app/Calendar';

export interface State {
    dirtySettings: Calendar;
}

export const initialState: State = {
    dirtySettings: null,
};

const optionsReducer = createReducer(
    initialState,
    on(OptionsActions.setSettings, (state, {newCalendar}) => ({ ...state, dirtySettings: newCalendar})),
);

export function reducer(state: State | undefined, action: Action) {
    return optionsReducer(state, action);
}
