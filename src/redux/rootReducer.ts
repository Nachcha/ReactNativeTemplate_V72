import {combineReducers} from 'redux';
import sampleReducer from './sample/reducer';

const rootReducer = combineReducers({
  sampleReducer,
  // Add other reducers here
});

export type State = ReturnType<typeof rootReducer>;
export default rootReducer;
