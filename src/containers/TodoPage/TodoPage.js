import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTodo, removeTodo } from '@src/store/actions/todoActions';
import Loader from '@src/components/Loader/Loader';
import { Redirect } from 'react-router';
import TodoPageInfo from './TodoPageInfo/TodoPageInfo';
import TodoPageEdit from './TodoPageEdit/TodoPageEdit';

const TodoPage = props => {
  const [editTodo, setEditTodo] = useState(false);
  const [isRemovedTodo, setIsRemovedTodo] = useState(false);
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
      <TodoPageInfo
        loading={loading}
        todo={todo}
        removeHandler={() => {
          removeCurrentTodo(id, true);
          setIsRemovedTodo(true);
        }}
        editHandler={() => setEditTodo(true)}
      />
    );
  }

  if (editTodo) {
    todoInfo = <TodoPageEdit todo={todo} id={id} />;
  }

  if (!loading && !todo && isRemovedTodo) {
    todoInfo = <Redirect to="/todo-list" />;
  }

  return (
    <div className="todo-page">
      <div className="todo-page__inner">
        {todoInfo}
        {loading && <Loader />}
        {error && <p className="error">{error.message}</p>}
      </div>
    </div>
  );
};

export default TodoPage;
