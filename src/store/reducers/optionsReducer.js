import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  isComplete: false,
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_OPTIONS_START:
      return { ...state, loading: true, error: null, isComplete: false };
    case actionTypes.CHANGE_OPTIONS_ERROR:
      return { ...state, error: action.error, loading: false, isComplete: true };
    case actionTypes.CHANGE_OPTIONS_SUCCESS:
      return { ...state, error: null, loading: false, isComplete: action.isComplete };
    default:
      return state;
  }
};

export default optionsReducer;
