import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  isComplete: false,
  wrongPassword: null,
  language: 'en',
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_OPTIONS_START:
      return { ...state, loading: true, error: null, isComplete: false, wrongPassword: null };
    case actionTypes.CHANGE_OPTIONS_ERROR:
      return { ...state, error: action.error, loading: false, isComplete: true };
    case actionTypes.CHANGE_OPTIONS_SUCCESS:
      return { ...state, error: null, loading: false, isComplete: action.isComplete, wrongPassword: null };
    case actionTypes.WRONG_PASSWORD:
      return { ...state, wrongPassword: action.error, loading: false };
    case actionTypes.GET_LANGUAGE:
      return { ...state, language: action.currentLanguage };
    case actionTypes.CHANGE_LANGUAGE:
      return { ...state, language: action.language };
    default:
      return state;
  }
};

export default optionsReducer;
