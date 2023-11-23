// setting.module.ts
import { createAction, createReducer, on } from '@ngrx/store';

export interface SettingState {
  setting: { /* setting data structure */ };
}

export const setSetting = createAction('[Setting] Set Setting', (setting: { /* setting data structure */ }) => ({ setting }));

export const settingReducer = createReducer(
  { setting: {} } as SettingState,
  on(setSetting, (state, { setting }) => ({ ...state, setting }))
);
