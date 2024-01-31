import {CommonActions, CommonActionType, ICommonReducer} from './types';

const initialState: ICommonReducer = {
  isAuthenticated: false,
};

const sampleReducer = (
  state: ICommonReducer = initialState,
  action: CommonActionType,
) => {
  switch (action.type) {
    case CommonActions.AUTHENTICATE:
      console.log('Authencate dispatched 2');
      return {...state, isAuthenticated: true};
    case CommonActions.LOGOUT:
      return {...state, isAuthenticated: false};
    default:
      return state;
  }
};

export default sampleReducer;
