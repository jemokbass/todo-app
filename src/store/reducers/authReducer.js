import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  token: null,
  id: null,
  isAuth: false,
  successfulSignUp: false,
  userInfo: null,
  getResponse: true,
  userKey: null,
  avatar: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, loading: true };
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state, error: null, loading: false, token: action.token, id: action.id, isAuth: true };
    case actionTypes.SIGN_UP_SUCCESS:
      return { ...state, error: null, loading: false, successfulSignUp: true };
    case actionTypes.AUTH_ERROR:
      return { ...state, error: action.error, loading: false };
    case actionTypes.START_INFO_RESPONSE:
      return { ...state, getResponse: true };
    case actionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        id: null,
        isAuth: false,
        getResponse: false,
        userInfo: null,
        userKey: null,
        avatar: null,
      };
    case actionTypes.GET_USER_INFO:
      const userInfo = action.info[Object.keys(action.info)[0]];
      const userKey = Object.keys(action.info)[0];
      return { ...state, userInfo, getResponse: false, userKey };
    case actionTypes.GET_AVATAR:
      return { ...state, avatar: action.avatar };
    default:
      return state;
  }
};

export default authReducer;
