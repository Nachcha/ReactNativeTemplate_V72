export enum AuthActions {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  SIGNUP_REQUEST = 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE = 'SIGNUP_FAILURE',
}

export interface IAuth {
  token: string;
}

export interface IAuthState {
  pending: boolean;
  token: string;
  error: string | null;
}

export type AuthStateType = IAuthState;

export interface ILoginPayload {
  values: {
    email: string;
    password: string;
  };
  callback: (a: any) => void | undefined;
}

export interface ILoginSuccessPayload {
  token: string;
}

export interface ILoginFailurePayload {
  error: string;
}

export type LoginRequestType = {
  type: AuthActions.LOGIN_REQUEST;
  payload: ILoginPayload;
};

export type LoginSuccessType = {
  type: AuthActions.LOGIN_SUCCESS;
  payload: ILoginSuccessPayload;
};

export type LoginFailureType = {
  type: AuthActions.LOGIN_FAILURE;
  payload: ILoginFailurePayload;
};

export interface ISignupPayload {
  values: {
    email: string;
    password: string;
  };
  callback: (a: any) => void | undefined;
}

export interface ISignupSuccessPayload {
  token: string;
}

export interface ISignupFailurePayload {
  error: string;
}

export type SignupRequestType = {
  type: AuthActions.SIGNUP_REQUEST;
  payload: ISignupPayload;
};

export type SignupSuccessType = {
  type: AuthActions.SIGNUP_SUCCESS;
  payload: ISignupSuccessPayload;
};

export type SignupFailureType = {
  type: AuthActions.SIGNUP_FAILURE;
  payload: ISignupFailurePayload;
};

export type AuthActionType =
  | LoginRequestType
  | LoginSuccessType
  | LoginFailureType
  | SignupRequestType
  | SignupSuccessType
  | SignupFailureType;
