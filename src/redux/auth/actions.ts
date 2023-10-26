import {
  AuthActions,
  ILoginFailurePayload,
  ILoginPayload,
  ILoginSuccessPayload,
  ISignupFailurePayload,
  ISignupPayload,
  ISignupSuccessPayload,
  LoginFailureType,
  LoginRequestType,
  LoginSuccessType,
  SignupFailureType,
  SignupRequestType,
  SignupSuccessType,
} from './types';

export const loginRequest = (payload: ILoginPayload): LoginRequestType => ({
  type: AuthActions.LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (
  payload: ILoginSuccessPayload,
): LoginSuccessType => ({
  type: AuthActions.LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (
  payload: ILoginFailurePayload,
): LoginFailureType => ({
  type: AuthActions.LOGIN_FAILURE,
  payload,
});

export const signupRequest = (payload: ISignupPayload): SignupRequestType => ({
  type: AuthActions.SIGNUP_REQUEST,
  payload,
});

export const signupSuccess = (
  payload: ISignupSuccessPayload,
): SignupSuccessType => ({
  type: AuthActions.SIGNUP_SUCCESS,
  payload,
});

export const signupFailure = (
  payload: ISignupFailurePayload,
): SignupFailureType => ({
  type: AuthActions.SIGNUP_FAILURE,
  payload,
});
