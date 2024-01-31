export enum SampleActions {
  DEPOSITE_MONEY = 'DEPOSITE_MONEY',
  WITHDRAW_MONEY = 'WITHDRAW_MONEY',
  BANKRUPT = 'BANKRUPT',
}

export type SampleReducerStateType = number;

interface IDepositeAction {
  type: SampleActions.DEPOSITE_MONEY;
  payload: number;
}

interface IWithdrawAction {
  type: SampleActions.WITHDRAW_MONEY;
  payload: number;
}

interface IBankruptActon {
  type: SampleActions.BANKRUPT;
}

export type SampleActionType =
  | IDepositeAction
  | IWithdrawAction
  | IBankruptActon;
