import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTodo, removeTodo } from '@src/store/actions/todoActions';
import Loader from '@src/components/Loader/Loader';
import TodoListItem from './TodoListItem/TodoListItem';

const TodoListPage = props => {
  const loading = useSelector(state => state.todo.loading);
  const error = useSelector(state => state.todo.error);
  const todoList = useSelector(state => state.todo.todo);
  const dispatch = useDispatch();
  const fetchTodoList = useCallback(uid => dispatch(fetchTodo(uid)), [dispatch]);
  const removeTodoItem = id => dispatch(removeTodo(id));
  const uid = useSelector(state => state.auth.id);

  useEffect(() => {
    fetchTodoList(uid);
  }, [fetchTodoList, uid]);

  let fetchedTodoList = <p>So far there are none todo :(</p>;

  if (todoList && !loading && !error && todoList.length > 0) {
    fetchedTodoList = todoList.map(todoItem => (
      <TodoListItem
        to={`todo/${todoItem[0]}`}
        title={todoItem[1].title}
        text={todoItem[1].text}
        key={todoItem[0]}
        onRemove={() => removeTodoItem(todoItem[0])}
      />
    ));
  }

  return (
    <div className="todo-list-page">
      <div className="container todo-list-page__inner">
        {loading ? <Loader /> : fetchedTodoList}
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
};

export default TodoListPage;
