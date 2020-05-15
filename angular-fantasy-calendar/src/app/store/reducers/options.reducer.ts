import { Action, createReducer, on } from '@ngrx/store';
import { OptionsActions, CalendarActions } from '../actions';
import { Calendar } from 'src/app/Calendar';

export interface State {
    dirtySettings: Calendar;
}

export const initialState: State = {
    dirtySettings: null
};

const optionsReducer = createReducer(
    initialState,
    on(OptionsActions.setDirtyCalendar, (state, {calendar}) => ({ ...state, dirtySettings: calendar}))
);

export function reducer(state: State | undefined, action: Action) {
    return optionsReducer(state, action);
}
