import { createAction, props } from '@ngrx/store';

export const toggleOptions = createAction(
    '[View] Toggle Options',
    props<{ }>()
);
