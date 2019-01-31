import { Action, AuthActionTypes } from './auth.actions';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducer(state = initialState, action: Action) {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return { ...state, token: action.payload, authenticated: true };
    case AuthActionTypes.LOGIN_FAIL:
    case AuthActionTypes.LOGOUT:
      return { ...state, token: null, authenticated: false };
    default:
      return state;
  }
}
