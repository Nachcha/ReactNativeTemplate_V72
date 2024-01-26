import {combineReducers} from 'redux';
import sampleReducer from './sample/reducer';
import authReducer from './auth/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const config = {
  authReducer: {
    key: 'auth',
    storage: AsyncStorage,
  },
};

const rootReducer = combineReducers({
  authReducer: persistReducer(config.authReducer, authReducer),
  sampleReducer,
  // Add other reducers here
});

export type State = ReturnType<typeof rootReducer>;
export default rootReducer;
