import { combineReducers } from 'redux';
import auth from './authentication';

const reducer = combineReducers({
  auth,
});

export default reducer;
