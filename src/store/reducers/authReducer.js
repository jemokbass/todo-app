import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  token: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, loading: true };
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state, error: null, loading: false, token: action.token, isAuth: true };
    case actionTypes.SIGN_UP_SUCCESS:
      return { ...state, error: null, loading: false };
    case actionTypes.AUTH_ERROR:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default authReducer;
