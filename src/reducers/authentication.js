import { REGISTER_SUCCESS, LOGIN_SUCCESS, NOT_AUTHED, UPDATE_REQUEST, UPDATE_SUCCESS } from '../actionTypes';

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
  case UPDATE_REQUEST:
    return {
      ...state,
      name: action.name,
      email: action.email,
    };
    case UPDATE_SUCCESS:
    return {
      ...state,
      name: action.name,
      email: action.email,
      token: action.token,
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
