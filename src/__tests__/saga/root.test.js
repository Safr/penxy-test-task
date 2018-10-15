import { fork } from 'redux-saga/effects';
import root from '../../sagas';
import authenticationSaga from '../../sagas/authentication';

describe('root', () => {
  const watchAll = root();
  test('should run all the effects', () => {
    const effectAuth = watchAll.next().value;
    expect(effectAuth).toEqual(fork(authenticationSaga));
  });
});
