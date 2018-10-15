import {
  notAuthed, loginSuccess, registerSuccess, update,
} from '../../actions';

describe('Authentication Actions', () => {
  const data = { name: 'name', email: 'email', access_token: 'token' };
  test('should login and get user data', () => {
    const action = loginSuccess(data);
    expect(action).toMatchSnapshot();
  });
  test('should unauthenticate', () => {
    const action = notAuthed();
    expect(action).toMatchSnapshot();
  });
  test('should register and get user data', () => {
    const action = registerSuccess(data);
    expect(action).toMatchSnapshot();
  });
  test('should update user data', () => {
    const action = update({ name: 'name', email: 'email' });
    expect(action).toMatchSnapshot();
  });
});
