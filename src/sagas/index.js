import { all, fork, takeLatest } from 'redux-saga/effects';
import authenticationSaga from './authentication';

const rootSaga = function* root() {
  // yield 'la';
  yield all([
    yield fork(authenticationSaga),
  ]);
};

export default rootSaga;
