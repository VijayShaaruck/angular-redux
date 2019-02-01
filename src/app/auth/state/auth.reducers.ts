import { Action, AuthActionTypes } from './auth.actions';

export interface State {
  token: string;
  authenticated: boolean;
  username: string;
  error: string;
}

const initialState: State = {
  token: null,
  authenticated: false,
  username: null,
  error: null
};

export function authReducer(state = initialState, action: Action) {
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
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: false,
        username: null,
        error: null
      };
    default:
      return state;
  }
}
