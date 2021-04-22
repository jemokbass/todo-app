import { combineReducers } from 'redux';

import todoReducer from './reducers/todoReducer';
import authReducer from './reducers/authReducer';
import optionsReducer from './reducers/optionsReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
  options: optionsReducer,
});

export default rootReducer;
