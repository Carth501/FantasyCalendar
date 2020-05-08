import { createAction, props } from '@ngrx/store';
import { TotalSettings } from 'src/app/totalSettings';

export const pushTotalSettings = createAction(
    '[Calendar] Push Total Settings',
    props<{ newTotalSettings: TotalSettings }>()
);

export const setTotalSettingsList = createAction(
    '[Calendar] Set Total Settings List',
    props<{ newTotalSettingsList: TotalSettings[] }>()
);
