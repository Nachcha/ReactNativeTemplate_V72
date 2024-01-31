export enum CommonActions {
  AUTHENTICATE = 'AUTHENTICATE',
  LOGOUT = 'LOGOUT',
}

export interface ICommonReducer {
  isAuthenticated: boolean;
}

interface IAuthenticateAction {
  type: CommonActions.AUTHENTICATE;
}

interface ILogoutAction {
  type: CommonActions.LOGOUT;
}

export type CommonActionType = IAuthenticateAction | ILogoutAction;
