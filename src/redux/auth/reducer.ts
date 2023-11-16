import {AuthActions, AuthActionType, AuthStateType} from './types';

const initialState: AuthStateType = {
  pending: false,
  token: '',
  error: null,
};

const authReducer = (
  state: AuthStateType = initialState,
  action: AuthActionType,
) => {
  switch (action.type) {
    case AuthActions.LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        token: action.payload.token,
        error: null,
      };
    case AuthActions.LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        token: '',
        error: action.payload.error,
      };
    case AuthActions.SIGNUP_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case AuthActions.SIGNUP_SUCCESS:
      return {
        ...state,
        pending: false,
        token: action.payload.token,
        error: null,
      };
    case AuthActions.SIGNUP_FAILURE:
      return {
        ...state,
        pending: false,
        token: '',
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
