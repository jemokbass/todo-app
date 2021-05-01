import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTodo, removeTodo } from '@src/store/actions/todoActions';
import Loader from '@src/components/Loader/Loader';
import Button from '@src/components/UI/Button/Button';
import { Redirect } from 'react-router';

const TodoPage = props => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todo.todo);
  const loading = useSelector(state => state.todo.loading);
  const error = useSelector(state => state.todo.error);
  const fetchTodo = useCallback(id => dispatch(getTodo(id)), [dispatch]);
  const removeCurrentTodo = (id, cleanCurrentTodo) => dispatch(removeTodo(id, cleanCurrentTodo));

  useEffect(() => {
    fetchTodo(id);
  }, [fetchTodo, id]);

  let todoInfo = null;

  if (todo) {
    todoInfo = (
      <>
        <h3 className="todo-page__title">{todo.title}</h3>
        <div className="todo-page__text">{todo.text}</div>
        <Button className="todo-page__button" disabled={loading} onClick={() => removeCurrentTodo(id, true)}>
          Remove todo
        </Button>
      </>
    );
  }

  return (
    <div className="todo-page">
      <div className="todo-page__inner">
        {todoInfo ? todoInfo : <Redirect to="/todo-list" />}
        {loading && <Loader />}
        {error && <p className="error">{error.message}</p>}
      </div>
    </div>
  );
};

export default TodoPage;
