import { REGISTER_SUCCESS, LOGIN_SUCCESS, NOT_AUTHED, UPDATE } from '../actionTypes';

const initialState = {
  name: '',
  email: '',
  token: '',
};

export default function register(state = initialState, action) {
  switch (action.type) {
  case REGISTER_SUCCESS:
  case LOGIN_SUCCESS:
    return {
      ...state,
      name: action.name,
      email: action.email,
      token: action.access_token,
    };
  case UPDATE:
    return {
      ...state,
      name: action.name,
      email: action.email,
    };
  case NOT_AUTHED:
    return initialState;
  // case LOGIN_SUCCESS:
  //   return {
  //     ...state,
  //     [action.access_token]: {
  //       name: action.name,
  //       email: action.email,
  //       token: action.access_token,
  //     },
  //   };
  default:
    return state;
  }
}
