import { Action, createReducer, on } from '@ngrx/store';
import { OptionsActions, CalendarActions } from '../actions';
import { Calendar } from 'src/app/Calendar';

export interface State {
    dirtySettings: Calendar;
    newEraPanel: boolean;
    newLeapYearPanel: boolean;
    eraEditingIndex: number;
    monthEditingIndex: number;
    dayOfWeekEditingIndex: number;
    leapYearEditingIndex: number;
}

export const initialState: State = {
    dirtySettings: null,
    newEraPanel: false,
    newLeapYearPanel: false,
    eraEditingIndex: -1,
    monthEditingIndex: -1,
    dayOfWeekEditingIndex: -1,
    leapYearEditingIndex: -1
};

const optionsReducer = createReducer(
    initialState,
    on(OptionsActions.setDirtyCalendar, (state, {calendar}) => ({ ...state, dirtySettings: calendar})),
    on(OptionsActions.setYearMath, (state, {yearMath}) => ({ ...state, dirtySettings:
        {...state.dirtySettings, year: yearMath }})),
    on(OptionsActions.setEventLists, (state, {eventLists}) => ({ ...state, dirtySettings:
        {...state.dirtySettings, eventLists}})),
    on(OptionsActions.setLeapYears, (state, {leapYears}) => ({ ...state, dirtySettings:
        {...state.dirtySettings, leapYears}})),
    on(OptionsActions.setMonths, (state, {settingsMonths}) => ({ ...state, dirtySettings:
        {...state.dirtySettings, months: settingsMonths}})),
    on(OptionsActions.setDoW, (state, {DoW}) => ({ ...state, dirtySettings:
        {...state.dirtySettings, DoW}})),
    on(OptionsActions.toggleNewEra, state => ({ ...state, newEraPanel: !state.newEraPanel})),
    on(OptionsActions.toggleNewLeapYear, state => ({ ...state, newLeapYearPanel: !state.newLeapYearPanel})),
    on(OptionsActions.eraEditingIndex, (state, {eraEditingIndex}) => ({ ...state, eraEditingIndex})),
    on(OptionsActions.monthEditingIndex, (state, {monthEditingIndex}) => ({ ...state, monthEditingIndex})),
    on(OptionsActions.dayOfWeekEditingIndex, (state, {dayOfWeekEditingIndex}) => ({ ...state, dayOfWeekEditingIndex})),
    on(OptionsActions.leapYearEditingIndex, (state, {leapYearEditingIndex}) => ({ ...state, leapYearEditingIndex})),

);

export function reducer(state: State | undefined, action: Action) {
    return optionsReducer(state, action);
}
