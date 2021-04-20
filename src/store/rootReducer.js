import { combineReducers } from 'redux';

import todoReducer from './reducers/todoReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
  options: authReducer,
});

export default rootReducer;
