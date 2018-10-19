import {
  REGISTER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, REGISTER_REQUEST, NOT_AUTHED, UPDATE_REQUEST, UPDATE_SUCCESS,
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

export const update = ({ email, password }) => ({
  type: UPDATE_REQUEST,
  email,
  password,
});


export const updateSuccess = ({ name, email, token }) => ({
  type: UPDATE_SUCCESS,
  name,
  email,
  token,
})

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
