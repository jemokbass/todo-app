import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todo: [],
  loading: false,
  error: null,
};

const newTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_SUBMIT_START:
      return { ...state, error: null, loading: true };
    case actionTypes.TODO_SUBMIT_SUCCESS:
      return { ...state, loading: false, error: false };
    case actionTypes.TODO_SUBMIT_ERROR:
      return { ...state, loading: false, error: action.error };
    case actionTypes.FETCH_TODO_START:
      return { ...state, error: null, loading: true };
    case actionTypes.FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todo: action.result };
    case actionTypes.FETCH_TODO_ERROR:
      return { ...state, loading: false, error: action.error };
    case actionTypes.REMOVE_TODO_START:
      return { ...state, loading: true, error: null };
    case actionTypes.REMOVE_TODO_SUCCESS:
      return { ...state, loading: false, error: null };
    case actionTypes.REMOVE_TODO_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default newTodoReducer;
