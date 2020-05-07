import { createAction, props } from '@ngrx/store';

export const toggleOptions = createAction(
    '[View] Toggle Options',
    props<{ }>()
);

export const setNewEventPanel = createAction(
    '[View] Toggle New Event Panel',
    props<{ open: boolean, dayID: number }>()
);
