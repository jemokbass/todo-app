import axios from '@src/assets/App/axios';
import * as actionTypes from './actionTypes';

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
  axios
    .post(`https://todo-app-9d8dc-default-rtdb.firebaseio.com/todo.json`, newTodo)
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
  axios
    .get(`https://todo-app-9d8dc-default-rtdb.firebaseio.com/todo.json`)
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

export const removeTodoSuccess = id => ({
  type: actionTypes.FETCH_TODO_SUCCESS,
  id,
});

export const removeTodoError = () => ({
  type: actionTypes.REMOVE_TODO_ERROR,
});

export const removeTodo = id => dispatch => {
  dispatch(removeTodoStart());
  axios
    .delete(`https://todo-app-9d8dc-default-rtdb.firebaseio.com/todo/${id}.json`)
    .then(result => {
      dispatch(removeTodoSuccess(id));
      dispatch(fetchTodo());
    })
    .catch(err => {
      dispatch(removeTodoError(err));
    });
};
