import { Action, createReducer, on } from '@ngrx/store';
import { OptionsActions } from '../actions';
import { Calendar } from 'src/app/Calendar';

export interface State {
    dirtySettingsList: Calendar[];
    currentCalendarID: number;
}

export const initialState: State = {
    dirtySettingsList: null,
    currentCalendarID: 0
};

const optionsReducer = createReducer(
    initialState,
    on(OptionsActions.setDirtyCalendars, (state, {calendars}) => ({ ...state, dirtySettingsList: calendars})),
);

export function reducer(state: State | undefined, action: Action) {
    return optionsReducer(state, action);
}
