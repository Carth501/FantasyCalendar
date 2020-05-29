import { createAction, props } from '@ngrx/store';
import { Calendar } from 'src/app/Calendar';

export const setActiveCalendar = createAction(
    '[Calendar] Set Active Calendar',
    props<{ activeCalendar: Calendar }>()
);

export const pushCalendar = createAction(
    '[Calendar] Push Calendar',
    props<{ newCalendar: Calendar }>()
);

export const setCalendarList = createAction(
    '[Calendar] Set Calendar List',
    props<{ newCalendarList: Calendar[] }>()
);

export const setTagList = createAction(
    '[View] Set Tag List',
    props<{ newTagList: string[] }>()
);

export const createTag = createAction(
    '[View] Create Tag',
    props<{ newTag: string }>()
);

export const deleteTag = createAction(
    '[View] Delete Tag',
    props<{ targetTag: string }>()
);

export const changeFilter = createAction(
    '[View] changeFilter',
    props<{ newFilter: string[] }>()
);
