import * as actionTypes from './actionTypes';
import app from '@src/firebase';

export const todoSubmitStart = () => ({
  type: actionTypes.TODO_SUBMIT_START,
});

export const todoSubmitSuccess = result => ({
  type: actionTypes.TODO_SUBMIT_SUCCESS,
  result,
});

export const todoSubmitError = err => ({
  type: actionTypes.TODO_SUBMIT_ERROR,
  error: err,
});

export const todoSubmit = newTodo => dispatch => {
  dispatch(todoSubmitStart());
  app
    .database()
    .ref('/todo')
    .push(newTodo)
    .then(result => {
      dispatch(todoSubmitSuccess(result.data));
      dispatch(todoSubmitSuccess([]));
    })
    .catch(err => {
      dispatch(todoSubmitError(err));
    });
};

export const fetchTodoStart = () => ({
  type: actionTypes.FETCH_TODO_START,
});

export const fetchTodoSuccess = result => ({
  type: actionTypes.FETCH_TODO_SUCCESS,
  result,
});

export const fetchTodoError = err => ({
  type: actionTypes.FETCH_TODO_ERROR,
  error: err,
});

export const fetchTodo = () => dispatch => {
  dispatch(fetchTodoStart());
  app
    .database()
    .ref('/todo')
    .get()
    .then(result => {
      const todoList = [];
      for (let key in result.data) {
        todoList.push({ ...result.data[key], id: key });
      }
      dispatch(fetchTodoSuccess(todoList));
    })
    .catch(err => {
      dispatch(fetchTodoError(err));
    });
};

export const removeTodoStart = () => ({
  type: actionTypes.REMOVE_TODO_START,
});

export const removeTodoSuccess = () => ({
  type: actionTypes.FETCH_TODO_SUCCESS,
});

export const removeTodoError = error => ({
  type: actionTypes.REMOVE_TODO_ERROR,
  error,
});

export const removeTodo = id => dispatch => {
  dispatch(removeTodoStart());
  app
    .database()
    .ref(`/todo/${id}`)
    .remove()
    .then(result => {
      dispatch(removeTodoSuccess());
      dispatch(fetchTodo());
    })
    .catch(err => {
      dispatch(removeTodoError(err));
    });
};
