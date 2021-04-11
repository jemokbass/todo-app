import Loader from '@src/components/Loader/Loader';
import { fetchTodo, removeTodo } from '@src/store/actions/todoActions';
import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoListItem from './TodoListItem/TodoListItem';

const TodoListPage = () => {
  const loading = useSelector(state => state.todo.loading);
  const error = useSelector(state => state.todo.error);
  const loadingItem = useSelector(state => state.todo.loadingItem);
  const errorItem = useSelector(state => state.todo.errorItem);
  const todoList = useSelector(state => state.todo.todo);
  const dispatch = useDispatch();
  const fetchTodoList = useCallback((token, uid) => dispatch(fetchTodo(token, uid)), [dispatch]);
  const removeTodoItem = useCallback(id => dispatch(removeTodo(id)), [dispatch]);
  const uid = useSelector(state => state.auth.id);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    fetchTodoList(token, uid);
  }, [fetchTodoList, token, uid]);

  const removeTodoHandler = useCallback(
    id => {
      removeTodoItem(id);
    },
    [removeTodoItem]
  );

  let fetchedTodoList = <p>So far there are none todo :(</p>;

  if (todoList && !loading && !error && todoList.length !== 0) {
    fetchedTodoList = todoList.map(todoItem => (
      <TodoListItem
        title={todoItem.title}
        text={todoItem.text}
        key={todoItem.id}
        onRemove={() => removeTodoHandler(todoItem.id)}
        error={errorItem}
        loading={loadingItem}
      />
    ));
  }

  return (
    <div className="todo-list-page">
      <div className="container todo-list-page__inner">
        {loading ? <Loader /> : !error && fetchedTodoList}
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
};

export default memo(TodoListPage);
