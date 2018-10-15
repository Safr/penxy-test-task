import {
  REGISTER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, REGISTER_REQUEST, NOT_AUTHED, UPDATE,
} from '../actionTypes';

export const login = ({ email, password }) => ({
  type: LOGIN_REQUEST,
  email,
  password,
});

export const register = ({ name, email, password }) => ({
  type: REGISTER_REQUEST,
  name,
  email,
  password,
});

export const logout = () => ({
  type: LOGOUT_REQUEST,
});

export const notAuthed = () => ({
  type: NOT_AUTHED,
});

export const update = ({ name, email }) => ({
  type: UPDATE,
  name,
  email,
});

export const registerSuccess = ({ name, email, access_token }) => ({
  type: REGISTER_SUCCESS,
  name,
  email,
  access_token,
});

export const loginSuccess = ({ name, email, access_token }) => ({
  type: LOGIN_SUCCESS,
  name,
  email,
  access_token,
});
