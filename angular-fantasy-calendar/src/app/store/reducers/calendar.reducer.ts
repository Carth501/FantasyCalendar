import { Action, createReducer, on } from '@ngrx/store';
import { CalendarActions } from '../actions';
import { Calendar } from 'src/app/Calendar';

export interface State {
    calendarList: Calendar[];
    activeCalendar: Calendar;
}

export const initialState: State = {
    calendarList: [],
    activeCalendar: null
};

const optionsReducer = createReducer(
    initialState,

    on(CalendarActions.pushCalendar, (state, {newCalendar}) => ({ ...state, calendarList: addCalendar(state.calendarList, newCalendar)})),

    on(CalendarActions.setCalendarList, (state, {newCalendarList}) => ({ ...state, calendarList: newCalendarList})),
    on(CalendarActions.setActiveCalendar, (state, {activeCalendar}) => ({...state, activeCalendar}))
);

export function reducer(state: State | undefined, action: Action) {
    return optionsReducer(state, action);
}

export function addCalendar(calendarList: Calendar[], newCalendar: Calendar): Calendar[] {
    const duplicateIndex = calendarList.findIndex(c => c.calendarID === newCalendar.calendarID);
    if (duplicateIndex !== -1) {
        const copy = [...calendarList];
        copy.splice(duplicateIndex, 1, newCalendar);
        return copy;
    } else {
        return [...calendarList, newCalendar];
    }
}
