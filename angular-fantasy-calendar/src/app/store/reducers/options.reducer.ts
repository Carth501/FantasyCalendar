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
    on(OptionsActions.setDirtyCalendar, (state, {calendar}) => ({ ...state, dirtySettings: calendar})),
    on(OptionsActions.setYearMath, (state, {yearMath}) => ({ ...state, yearMath})),
    on(OptionsActions.setEventLists, (state, {eventLists}) => ({ ...state, eventLists})),
    on(OptionsActions.setLeapYears, (state, {leapYears}) => ({ ...state, leapYears})),
    on(OptionsActions.setMonths, (state, {settingsMonths}) => ({ ...state, settingsMonths})),
    on(OptionsActions.setDoW, (state, {DoW}) => ({ ...state, DoW}))
);

export function reducer(state: State | undefined, action: Action) {
    return optionsReducer(state, action);
}
