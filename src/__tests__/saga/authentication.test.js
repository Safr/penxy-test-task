import {
  all, call, fork, put, select, takeLatest,
} from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import {
  LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST, UPDATE,
} from '../../actionTypes';
import { loginSuccess, notAuthed, registerSuccess } from '../../actions';
import authRoot from '../../sagas/authentication';
import {
  watchLogin, watchLogout, watchRegister, watchUpdate, loginSaga, logoutSaga, createUserSaga, updateSaga,
  getToken, getUser, updateUser, createToken,
} from '../../sagas/authentication';

describe('auth root', () => {
  const watchAll = authRoot();
  test('should run all the generators', () => {
    const effect = watchAll.next().value;
    expect(effect).toEqual(all([
      fork(watchLogin),
      fork(watchLogout),
      fork(watchUpdate),
      fork(watchRegister),
    ]));
  });
});

describe('auth saga watchers', () => {
  describe('watchLogin', () => {
    test('waits for the LOGIN_REQUEST action', () => {
      const generator = cloneableGenerator(watchLogin)();
      const expectTake = generator.next().value;
      expect(expectTake).toEqual(takeLatest(LOGIN_REQUEST, loginSaga));
    });
  });
  describe('watchLogout', () => {
    test('waits for the LOGOUT_REQUEST action', () => {
      const generator = cloneableGenerator(watchLogout)();
      const expectTake = generator.next().value;
      expect(expectTake).toEqual(takeLatest(LOGOUT_REQUEST, logoutSaga));
    });
  });
  describe('watchRegister', () => {
    test('waits for the REGISTER_REQUEST action', () => {
      const generator = cloneableGenerator(watchRegister)();
      const expectTake = generator.next().value;
      expect(expectTake).toEqual(takeLatest(REGISTER_REQUEST, createUserSaga));
    });
  });
  describe('watchUpdate', () => {
    test('waits for the UPDATE action', () => {
      const generator = cloneableGenerator(watchUpdate)();
      const expectTake = generator.next().value;
      expect(expectTake).toEqual(takeLatest(UPDATE, updateSaga));
    });
  });
});

describe('auth saga workers', () => {
  describe('loginSaga', () => {
    const action = { email: 'email', password: 'password' };
    const access_token = 'token';
    const generator = loginSaga(action);
    test('should call getToken', () => {
      const expectTake = generator.next().value;
      expect(expectTake).toEqual(call(getToken, action));
    });
    test('should call getUser', () => {
      const expectTake = generator.next({ name: '', email: 'email', access_token }).value;
      expect(expectTake).toEqual(call(getUser, access_token));
    });
    test('should dispatch a loginSuccess action if successful', () => {
      expect(generator.next({ name: '', email: 'email' }).value).toEqual(put(loginSuccess({ name: '', email: 'email', access_token })));
    });
    test('should be done', () => {
      expect(generator.next().done).toEqual(true);
    });
  });
  describe('logoutSaga', () => {
    const generator = logoutSaga();
    test('should dispatch notAuthed action', () => {
      const expectTake = generator.next().value;
      expect(expectTake).toEqual(put(notAuthed()));
    });
    test('should be done', () => {
      expect(generator.next().done).toEqual(true);
    });
  });
  describe('updateSaga', () => {
    const token = '';
    const action = { name: '', email: '', token };
    const generator = updateSaga({ name: '', email: '' });
    test('should select token', () => {
      const selector = () => action.token;
      const expectTake = generator.next().value;
      expect(expectTake).toEqual(select(selector));
    });
    test('should call updateUser', () => {
      const expectTake = generator.next(action.token).value;
      expect(expectTake).toEqual(call(updateUser, action));
    });
    test('should be done', () => {
      expect(generator.next().done).toEqual(true);
    });
  });
  describe('createUserSaga', () => {
    const action = { name: '', email: '', password: '' };
    const access_token = 'token';
    const generator = createUserSaga(action);
    test('should call createToken', () => {
      const expectTake = generator.next().value;
      expect(expectTake).toEqual(call(createToken, action));
    });
    test('should dispatch a registerSuccess action if successful', () => {
      expect(generator.next({ name: '', email: 'email', access_token }).value).toEqual(put(registerSuccess({ name: '', email: 'email', access_token })));
    });
    test('should be done', () => {
      expect(generator.next().done).toEqual(true);
    });
  });
});
