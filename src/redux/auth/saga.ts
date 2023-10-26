import axios, {all} from 'axios';
import {AuthActions, IAuth, ILoginPayload, ISignupPayload} from './types';
import {
  loginFailure,
  loginSuccess,
  signupFailure,
  signupSuccess,
} from './actions';
import {call, put, takeLatest} from 'redux-saga/effects';

const login = async (payload: ILoginPayload['values']) => {
  const {data} = await axios.post<IAuth>(
    'https://reqres.in/api/login',
    {...payload},
    {headers: {'Content-Type': 'application/json', Accept: 'application/json'}},
  );
  return data;
};

const signup = async (payload: ISignupPayload['values']) => {
  const {data} = await axios.post<IAuth>(
    'https://reqres.in/api/signup',
    {...payload},
    {headers: {'Content-Type': 'application/json', Accept: 'application/json'}},
  );
  return data;
};

function* loginSaga(action: any) {
  try {
    const response: {token: string} = yield call(login, action.payload.values);

    yield put(
      loginSuccess({
        token: response.token,
      }),
    );
  } catch (error: any) {
    yield put(
      loginFailure({
        error: error.message,
      }),
    );
  }
}

function* signupSaga(action: any) {
  try {
    const response: {token: string} = yield call(signup, action.payload.values);

    yield put(
      signupSuccess({
        token: response.token,
      }),
    );
  } catch (error: any) {
    yield put(
      signupFailure({
        error: error.message,
      }),
    );
  }
}

function* authSaga() {
  yield all([
    takeLatest(AuthActions.LOGIN_REQUEST, loginSaga),
    takeLatest(AuthActions.SIGNUP_REQUEST, signupSaga),
  ]);
}

export default authSaga;
