// app.state.ts
import { UserState, userReducer } from './user.module';

export interface AppState {
  user: UserState;
}

export const reducers = {
  user: userReducer,
};
