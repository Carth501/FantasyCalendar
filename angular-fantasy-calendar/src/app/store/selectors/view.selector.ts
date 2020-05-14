import { createSelector } from '@ngrx/store';
import { State } from '../reducers/view.reducer';
import { calendarView, selectCalendars } from './calendar.selector';

export interface AppState {
    view: State;
}

export const selectView = (state: AppState) => state.view;

export const selectOptionsOpen = createSelector(
    selectView,
    ( state: State ) => state.optionsOpen
);

export const selectOptionsClosed = createSelector(
    selectView,
    ( state: State ) => !state.optionsOpen
);

export const selectNewEventOpen = createSelector(
    selectView,
    ( state: State ) => state.newEventOpen
);

export const selectNewEventDayID = createSelector(
    selectView,
    ( state: State ) => state.dayID
);

export const selectCalendarIndex = createSelector(
    selectView,
    ( state: State ) => state.calendarIndex
);
