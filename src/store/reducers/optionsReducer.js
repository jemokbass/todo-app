import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_OPTIONS_START:
      return { ...state, loading: true, error: null };
    case actionTypes.CHANGE_OPTIONS_ERROR:
      return { ...state, error: action.error, loading: false };
    case actionTypes.CHANGE_OPTIONS_SUCCESS:
      return { ...state, error: null, loading: false };
    default:
      return state;
  }
};

export default optionsReducer;
