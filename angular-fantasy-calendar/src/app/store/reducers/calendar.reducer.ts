import { Action, createReducer, on } from '@ngrx/store';
import { CalendarActions } from '../actions';
import { TotalSettings } from 'src/app/totalSettings';

export interface State {
    totalSettingsList: TotalSettings[];
}

export const initialState: State = {
    totalSettingsList: [],
};

const optionsReducer = createReducer(
    initialState,
    on(CalendarActions.pushTotalSettings, (state, {newTotalSettings}) => ({ ...state, totalSettings: newTotalSettings})),
    on(CalendarActions.setTotalSettingsList, (state, {newTotalSettingsList}) => ({ ...state, totalSettingsList: newTotalSettingsList})),
);

export function reducer(state: State | undefined, action: Action) {
    return optionsReducer(state, action);
}
