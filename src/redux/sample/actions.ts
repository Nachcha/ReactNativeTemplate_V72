import {Dispatch} from 'redux';
import {SampleActionType, SampleActions} from './types';

export const depositeMoney = (amount: number) => {
  return (dispatch: Dispatch<SampleActionType>) => {
    dispatch({
      type: SampleActions.DEPOSITE_MONEY,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<SampleActionType>) => {
    dispatch({
      type: SampleActions.WITHDRAW_MONEY,
      payload: amount,
    });
  };
};

export const bankrupt = () => {
  return (dispatch: Dispatch<SampleActionType>) => {
    dispatch({
      type: SampleActions.BANKRUPT,
    });
  };
};
