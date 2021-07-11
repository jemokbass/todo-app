import * as actionTypes from './actionTypes';
import app from '@src/firebase';

export const todoSubmitStart = () => ({
  type: actionTypes.TODO_SUBMIT_START,
});

export const todoSubmitSuccess = result => ({
  type: actionTypes.TODO_SUBMIT_SUCCESS,
  result,
});

export const todoSubmitError = error => ({
  type: actionTypes.TODO_SUBMIT_ERROR,
  error,
});

export const changeTodoStart = () => ({
  type: actionTypes.CHANGE_TODO_START,
});

export const changeTodoError = error => ({
  type: actionTypes.CHANGE_OPTIONS_ERROR,
  error,
});

export const changeTodoSuccess = () => ({
  type: actionTypes.CHANGE_TODO_SUCCESS,
});

export const changeTodo = (id, data) => async dispatch => {
  dispatch(changeTodoStart());

  await app
    .database()
    .ref('todo/' + id)
    .update(data)
    .then(result => {
      dispatch(changeTodoSuccess());
    })
    .catch(error => {
      dispatch(changeTodoError(error));
    });
};

export const todoPositionColumn = () => ({
  type: actionTypes.TODO_POSITION_COLUMN,
});

export const todoPositionList = () => ({
  type: actionTypes.TODO_POSITION_LIST,
});

export const todoSubmit = newTodo => async dispatch => {
  dispatch(todoSubmitStart());

  await app
    .database()
    .ref('/todo')
    .push(newTodo)
    .then(result => {
      dispatch(todoSubmitSuccess(result.data));
      dispatch(todoSubmitSuccess([]));
    })
    .catch(err => dispatch(todoSubmitError(err)));
};

export const fetchTodoStart = () => ({
  type: actionTypes.FETCH_TODO_START,
});

export const fetchTodoSuccess = result => ({
  type: actionTypes.FETCH_TODO_SUCCESS,
  result,
});

export const fetchTodoError = error => ({
  type: actionTypes.FETCH_TODO_ERROR,
  error,
});

export const fetchTodo = uid => async dispatch => {
  dispatch(fetchTodoStart());

  await app
    .database()
    .ref('todo/')
    .orderByChild('uid')
    .equalTo(uid)
    .on('value', snapshot => {
      if (snapshot.exists()) {
        return dispatch(fetchTodoSuccess(Object.entries(snapshot.val())));
      } else {
        return dispatch(fetchTodoError({ error: { message: 'error' } }));
      }
    });
};

export const getTodoStart = () => ({
  type: actionTypes.GET_TODO_START,
});

export const getTodoSuccess = result => ({
  type: actionTypes.GET_TODO_SUCCESS,
  result,
});

export const getTodoError = error => ({
  type: actionTypes.GET_TODO_ERROR,
  error,
});

export const getTodo = id => async dispatch => {
  dispatch(getTodoStart());

  await app
    .database()
    .ref(`todo/${id}`)
    .get()
    .then(result => {
      dispatch(getTodoSuccess(result.toJSON()));
    })
    .catch(error => dispatch(getTodoError(error)));
};

export const removeTodoStart = () => ({
  type: actionTypes.REMOVE_TODO_START,
});

export const removeTodoSuccess = cleanCurrentTodo => ({
  type: actionTypes.REMOVE_TODO_SUCCESS,
  cleanCurrentTodo,
});

export const removeTodoError = error => ({
  type: actionTypes.REMOVE_TODO_ERROR,
  error,
});

export const removeTodo = (id, cleanCurrentTodo) => async dispatch => {
  dispatch(removeTodoStart());

  await app
    .database()
    .ref('/todo')
    .child(`/${id}`)
    .remove()
    .then(result => {
      if (cleanCurrentTodo) {
        dispatch(removeTodoSuccess(cleanCurrentTodo));
      } else {
        dispatch(removeTodoSuccess());
      }
    })
    .catch(error => dispatch(removeTodoError(error)));
};
