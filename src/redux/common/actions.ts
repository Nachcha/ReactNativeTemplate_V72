import {Dispatch} from 'redux';
import {CommonActions, CommonActionType} from './types';

export const Authencate = () => ({
  type: CommonActions.AUTHENTICATE,
});

export const Logout = () => {
  return (dispatch: Dispatch<CommonActionType>) => {
    dispatch({
      type: CommonActions.LOGOUT,
    });
  };
};
