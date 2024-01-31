import {combineReducers} from 'redux';
import sampleReducer from './sample/reducer';
import authReducer from './auth/reducer';
import commonReducer from './common/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const config = {
  authReducer: {
    key: 'auth',
    storage: AsyncStorage,
  },
};

const rootReducer = combineReducers({
  auth: persistReducer(config.authReducer, authReducer),
  sample: sampleReducer,
  common: commonReducer,
  // Add other reducers here
});

export type State = ReturnType<typeof rootReducer>;
export default rootReducer;
