import { Action } from '@ngrx/store';

export enum AppAuthActionTypes {
  LOGOUT = 'LOGOUT'
}

export enum AppFEActionTypes {
  SET_FE = 'SET_FE'
}

export class Logout implements Action {
  readonly type = AppAuthActionTypes.LOGOUT;
}

export class SetFE implements Action {
  readonly type = AppFEActionTypes.SET_FE;
  constructor(public payload: string) {}
}

export type AppAuthAction = Logout;

export type AppFEAction = SetFE;
