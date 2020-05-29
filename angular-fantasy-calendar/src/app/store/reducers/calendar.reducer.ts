import { Action, createReducer, on } from '@ngrx/store';
import { CalendarActions } from '../actions';
import { Calendar } from 'src/app/Calendar';

export interface State {
    calendarList: Calendar[];
    activeCalendar: Calendar;
    tagList: string[];
    currentFilter: string[];
}

export const initialState: State = {
    calendarList: [],
    activeCalendar: null,
    tagList: [],
    currentFilter: []
};

const optionsReducer = createReducer(
    initialState,

    on(CalendarActions.pushCalendar, (state, {newCalendar}) => ({ ...state, calendarList: addCalendar(state.calendarList, newCalendar)})),

    on(CalendarActions.setCalendarList, (state, {newCalendarList}) => ({ ...state, calendarList: newCalendarList})),
    on(CalendarActions.setActiveCalendar, (state, {activeCalendar}) => ({...state, activeCalendar})),
    on(CalendarActions.setTagList, (state, {newTagList}) => ({ ...state, tagList: newTagList })),
    on(CalendarActions.createTag, (state, {newTag}) => ({ ...state, tagList: {...state.tagList, newTag} })),
    on(CalendarActions.deleteTag, (state, {targetTag}) => {
        const tagList = state.tagList.filter(tag => tag !== targetTag);
        return { ...state, tagList };
    }),
    on(CalendarActions.changeFilter, (state, {newFilter}) => ({ ...state, currentFilter: newFilter })),
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
