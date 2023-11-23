// user.module.ts
import { createAction, createReducer, on } from '@ngrx/store';

export interface UserState {
  user: {
    name: string;
    email: string;
  };
}

export const setUser = createAction('[User] Set User', (user: any) => ({ user }));

export const userReducer = createReducer(
  { user: {} } as UserState,
  on(setUser, (state, { user }) => ({ ...state, user }))
);
