import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, loading: true };
    case actionTypes.SIGN_UP_SUCCESS:
      return { ...state, error: null, loading: false };
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state };
    case actionTypes.AUTH_ERROR:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default authReducer;
