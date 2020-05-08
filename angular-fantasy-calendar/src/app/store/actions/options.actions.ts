import { createAction, props } from '@ngrx/store';

export const setStartingYear = createAction(
    '[Options] Set Starting Year',
    props<{ year: number }>()
);
