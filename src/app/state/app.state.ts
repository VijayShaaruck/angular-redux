import { ActionReducerMap } from '@ngrx/store';
import {
  routerReducer,
  RouterReducerState,
  SerializedRouterStateSnapshot
} from '@ngrx/router-store';

export interface AppState {
  router: RouterReducerState<SerializedRouterStateSnapshot>;
}

export const AppReducers: ActionReducerMap<AppState> = {
  router: routerReducer
};
