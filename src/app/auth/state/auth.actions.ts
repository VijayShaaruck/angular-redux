import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  CLEAR_ERROR = 'CLEAR_ERROR'
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(
    public payload: { username: string; password: string; redirectUrl: string }
  ) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { username: string; token: string }) {}
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LOGIN_FAIL;
  constructor(public payload: string) {}
}

export class ClearError implements Action {
  readonly type = AuthActionTypes.CLEAR_ERROR;
}

export type Action = LoginSuccess | LoginFail | ClearError;
