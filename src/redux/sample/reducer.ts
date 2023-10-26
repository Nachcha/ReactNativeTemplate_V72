import {SampleActions, SampleActionType, SampleReducerStateType} from './types';

const initialState: SampleReducerStateType = 0;

const sampleReducer = (
  state: SampleReducerStateType = initialState,
  action: SampleActionType,
) => {
  switch (action.type) {
    case SampleActions.DEPOSITE_MONEY:
      return state + action.payload;
    case SampleActions.WITHDRAW_MONEY:
      return state - action.payload;
    case SampleActions.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default sampleReducer;
