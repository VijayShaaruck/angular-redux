import { Action, AuthActionTypes } from './auth.actions';
import * as fromRoot from '../../state/app.state';
import { AppAuthAction, AppAuthActionTypes } from 'src/app/state/app.actions';

export interface AppState extends fromRoot.AppState {
  auth: AuthState;
}

export interface AuthState {
  token: string;
  authenticated: boolean;
  username: string;
  error: string;
}

const initialState: AuthState = {
  token: null,
  authenticated: false,
  username: null,
  error: null
};

export function authReducer(
  state = initialState,
  action: Action | AppAuthAction
) {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        authenticated: true,
        username: action.payload.username,
        error: null
      };
    case AuthActionTypes.LOGIN_FAIL:
      return {
        ...state,
        token: null,
        authenticated: false,
        username: null,
        error: action.payload
      };
    case AppAuthActionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: false,
        username: null,
        error: null
      };
    case AuthActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
}
