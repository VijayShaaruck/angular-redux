import { ActionReducerMap } from '@ngrx/store';
import {
  routerReducer,
  RouterReducerState,
  SerializedRouterStateSnapshot
} from '@ngrx/router-store';
import * as fromAuth from '../auth/state/auth.reducers';

export interface AppState {
  router: RouterReducerState<SerializedRouterStateSnapshot>;
  auth: fromAuth.AuthState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  auth: fromAuth.authReducer
};
