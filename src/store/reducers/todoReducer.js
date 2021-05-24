import * as actionTypes from '../actions/actionTypes';

const initialState = {
  allTodo: [],
  todo: null,
  submitLoading: false,
  submitError: null,
  fetchLoading: false,
  fetchError: null,
  loading: false,
  error: null,
  todoBug: null,
  todoPosition: false,
};

const newTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_SUBMIT_START:
      return { ...state, submitError: null, submitLoading: true };
    case actionTypes.TODO_SUBMIT_SUCCESS:
      return { ...state, submitLoading: false, submitError: false };
    case actionTypes.TODO_SUBMIT_ERROR:
      return { ...state, submitLoading: false, submitError: action.error };
    case actionTypes.TODO_POSITION_COLUMN:
      return {...state, todoPosition: true}
    case actionTypes.TODO_POSITION_LIST:
      return {...state, todoPosition: false}
    case actionTypes.FETCH_TODO_START:
      return { ...state, fetchError: null, fetchLoading: true };
    case actionTypes.FETCH_TODO_SUCCESS:
      return { ...state, fetchLoading: false, fetchError: null, allTodo: action.result };
    case actionTypes.FETCH_TODO_ERROR:
      return { ...state, fetchLoading: false, fetchError: action.error };
    case actionTypes.REMOVE_TODO_START:
      let todoBug = null;

      if (state.allTodo.length === 1) {
        todoBug = true;
      }
      return { ...state, loading: true, error: null, todoBug };
    case actionTypes.REMOVE_TODO_SUCCESS:
      let allTodo = state.allTodo;
      let todo = state.todo;

      if (state.todoBug) {
        allTodo = [];
      }
      if (action.cleanCurrentTodo) {
        todo = null;
      }

      return { ...state, loading: false, error: null, allTodo, todo };
    case actionTypes.REMOVE_TODO_ERROR:
      return { ...state, loading: false, error: action.error };
    case actionTypes.GET_TODO_START:
      return { ...state, error: null, loading: true };
    case actionTypes.GET_TODO_SUCCESS:
      return { ...state, loading: false, error: null, todo: action.result };
    case actionTypes.GET_TODO_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default newTodoReducer;
