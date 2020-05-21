import { Action, createReducer, on } from '@ngrx/store';
import { OptionsActions, CalendarActions } from '../actions';
import { Calendar } from 'src/app/Calendar';

export interface State {
    dirtySettings: Calendar;
    newEraPanel: boolean;
    newLeapYearPanel: boolean;
    newEventPanel: boolean;
    eraEditingIndex: number;
    monthEditingIndex: number;
    dayOfWeekEditingIndex: number;
    leapYearEditingIndex: number;
    yearOptionsOpen: boolean;
    monthOptionsOpen: boolean;
    weekOptionsOpen: boolean;
    leapYearOptionsOpen: boolean;
    eventOptionsOpen: boolean;
    jsonOptionsOpen: boolean;
}

export const initialState: State = {
    dirtySettings: null,
    newEraPanel: false,
    newLeapYearPanel: false,
    newEventPanel: false,
    eraEditingIndex: -1,
    monthEditingIndex: -1,
    dayOfWeekEditingIndex: -1,
    leapYearEditingIndex: -1,
    yearOptionsOpen: false,
    monthOptionsOpen: false,
    weekOptionsOpen: false,
    leapYearOptionsOpen: false,
    eventOptionsOpen: false,
    jsonOptionsOpen: false,
};

const optionsReducer = createReducer(
    initialState,
    on(OptionsActions.setDirtyCalendar, (state, {calendar}) => ({ ...state, dirtySettings: calendar})),
    on(OptionsActions.setYearMath, (state, {yearMath}) => ({ ...state, dirtySettings:
        {...state.dirtySettings, year: yearMath }})),
    on(OptionsActions.setEventLists, (state, {events}) => ({ ...state, dirtySettings:
        {...state.dirtySettings, events}})),
    on(OptionsActions.setLeapYears, (state, {leapYears}) => ({ ...state, dirtySettings:
        {...state.dirtySettings, leapYears}})),
    on(OptionsActions.setMonths, (state, {settingsMonths}) => ({ ...state, dirtySettings:
        {...state.dirtySettings, months: settingsMonths}})),
    on(OptionsActions.setDoW, (state, {DoW}) => ({ ...state, dirtySettings:
        {...state.dirtySettings, DoW}})),
    on(OptionsActions.toggleNewEra, state => ({ ...state, newEraPanel: !state.newEraPanel})),
    on(OptionsActions.toggleNewEvent, state => ({ ...state, newEventPanel: !state.newEventPanel})),
    on(OptionsActions.toggleNewLeapYear, state => ({ ...state, newLeapYearPanel: !state.newLeapYearPanel})),
    on(OptionsActions.eraEditingIndex, (state, {eraEditingIndex}) => ({ ...state, eraEditingIndex})),
    on(OptionsActions.monthEditingIndex, (state, {monthEditingIndex}) => ({ ...state, monthEditingIndex})),
    on(OptionsActions.dayOfWeekEditingIndex, (state, {dayOfWeekEditingIndex}) => ({ ...state, dayOfWeekEditingIndex})),
    on(OptionsActions.leapYearEditingIndex, (state, {leapYearEditingIndex}) => ({ ...state, leapYearEditingIndex})),
    on(OptionsActions.toggleYearOptions, state => ({ ...state, yearOptionsOpen: !state.yearOptionsOpen})),
    on(OptionsActions.toggleMonthOptions, state => ({ ...state, monthOptionsOpen: !state.monthOptionsOpen})),
    on(OptionsActions.toggleWeekOptions, state => ({ ...state, weekOptionsOpen: !state.weekOptionsOpen})),
    on(OptionsActions.toggleLeapYearOptions, state => ({ ...state, leapYearOptionsOpen: !state.leapYearOptionsOpen})),
    on(OptionsActions.toggleEventOptions, state => ({ ...state, eventOptionsOpen: !state.eventOptionsOpen})),
    on(OptionsActions.toggleJSONOptions, state => ({ ...state, jsonOptionsOpen: !state.jsonOptionsOpen})),

);

export function reducer(state: State | undefined, action: Action) {
    return optionsReducer(state, action);
}
