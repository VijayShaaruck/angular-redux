import * as AuthActions from './auth.actions';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.Action) {
  switch (action.type) {
    case AuthActions.AuthActionTypes.LOGIN_SUCCESS:
      return { ...state, token: action.payload, authenticated: true };
    case AuthActions.AuthActionTypes.LOGIN_FAIL:
    case AuthActions.AuthActionTypes.LOGOUT:
      return { ...state, token: null, authenticated: false };
    default:
      return state;
  }
}
