import { Action, createReducer, on } from '@ngrx/store';
import { CalendarActions } from '../actions';
import { Calendar } from 'src/app/Calendar';

export interface State {
    calendarList: Calendar[];
}

export const initialState: State = {
    calendarList: [],
};

const optionsReducer = createReducer(
    initialState,

    on(CalendarActions.pushCalendar, (state, {newCalendar}) => ({ ...state, calendarList: [...state.calendarList, newCalendar]})),

    on(CalendarActions.setCalendarList, (state, {newCalendarList}) => ({ ...state, calendarList: newCalendarList})),
);

export function reducer(state: State | undefined, action: Action) {
    return optionsReducer(state, action);
}
