// app.state.ts
import { UserState, userReducer } from './user.module';
import { SettingState, settingReducer } from './setting.module';

export interface AppState {
  user: UserState;
  setting: SettingState;
}

export const reducers = {
  user: userReducer,
  setting: settingReducer
};
