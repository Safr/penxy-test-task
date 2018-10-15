import {
  REGISTER_SUCCESS, LOGIN_SUCCESS, NOT_AUTHED, UPDATE,
} from '../../actionTypes';
import authenticationReducer from '../../reducers/authentication';

const initialState = {
  name: '',
  email: '',
  token: '',
};

describe('Authentication reducer', () => {
  const data = { name: 'name', email: 'email', access_token: 'token' };
  test('should setup default state', () => {
    const state = authenticationReducer(undefined, { type: '@@INIT' });
    expect(state).toMatchSnapshot();
  });
  test('should set register data', () => {
    const action = { type: REGISTER_SUCCESS, ...data };
    const state = authenticationReducer(initialState, action);
    expect(state).toMatchSnapshot();
  });
  test('should set login data', () => {
    const action = { type: LOGIN_SUCCESS, ...data };
    const state = authenticationReducer(initialState, action);
    expect(state).toMatchSnapshot();
  });
  test('should set updated data', () => {
    const action = { type: UPDATE, name: 'name', email: 'email' };
    const state = authenticationReducer(initialState, action);
    expect(state).toMatchSnapshot();
  });
  test('should back to initial state', () => {
    const action = { type: NOT_AUTHED };
    const state = authenticationReducer(initialState, action);
    expect(state).toMatchSnapshot();
  });
});
