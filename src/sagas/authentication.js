import {
  call, put, take, fork, takeLatest, all, select,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST, UPDATE_REQUEST,
} from '../actionTypes';
import { registerSuccess, loginSuccess, updateSuccess, notAuthed } from '../actions';

export const updateUser = ({ email, password, token }) => {
  // encode data to meet application/x-www-form-urlencoded charset
  const body = `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
  return fetch('https://penxy-mock-api.herokuapp.com/profile', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    mode: 'cors',
    body,
  }).then(res => res.json());
};

export function* updateSaga({ email, password }) {
  const selector = state => state.auth.token;
  try {
    const token = yield select(selector);
    const user = yield call(updateUser, { email, password, token });
    yield put(updateSuccess({ ...user, token }));
  } catch (error) {
    console.log('error', error);
  }
}

export function* logoutSaga() {
  yield put(notAuthed());
}

export const createToken = ({ name, email, password }) => {
  // encode data to meet application/x-www-form-urlencoded charset
  const body = `name=${encodeURIComponent(name)
  }&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

  return fetch('https://penxy-mock-api.herokuapp.com/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    mode: 'cors',
    body,
  }).then(res => res.json());
};

export function* createUserSaga({ name, email, password }) {
  try {
    const userData = yield call(createToken, { name, email, password });
    yield put(registerSuccess({ ...userData, name }));
  } catch (error) {
    console.log('error', error);
  }
}

export const getToken = ({ email, password }) => {
  // encode data to meet application/x-www-form-urlencoded charset
  const body = `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

  return fetch('https://penxy-mock-api.herokuapp.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    mode: 'cors',
    body,
  }).then(res => res.json());
};

export const getUser = (token) => {
  return fetch('https://penxy-mock-api.herokuapp.com/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(res => res.json());
};

export function* loginSaga({ email, password }) {
  try {
    const userData = yield call(getToken, { email, password });
    const { access_token } = userData;
    yield put(loginSuccess(userData));
  } catch (error) {
    console.log('LOGIN_FAILURE', error.message);
  }
}


export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

export function* watchRegister() {
  yield takeLatest(REGISTER_REQUEST, createUserSaga);
}

export function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logoutSaga);
}

export function* watchUpdate() {
  yield takeLatest(UPDATE_REQUEST, updateSaga);
}

export default function* authenticationSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchUpdate),
    fork(watchRegister),
  ]);
}
