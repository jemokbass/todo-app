import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTodo, removeTodo, todoPositionColumn, todoPositionList } from '@src/store/actions/todoActions';
import Loader from '@src/components/Loader/Loader';
import TodoListItem from './TodoListItem/TodoListItem';
import Button from '@src/components/UI/Button/Button';
import { ReactComponent as ListButtonIcon } from '@src/assets/img/list-button.svg';
import { ReactComponent as ColumnButtonIcon } from '@src/assets/img/column-button.svg';
import { ReactComponent as StarIcon } from '@src/assets/img/star.svg';

const TodoListPage = props => {
  const loading = useSelector(state => state.todo.fetchLoading);
  const error = useSelector(state => state.todo.fetchError);
  let todoList = useSelector(state => state.todo.allTodo);
  const dispatch = useDispatch();
  const fetchTodoList = useCallback(uid => dispatch(fetchTodo(uid)), [dispatch]);
  const removeTodoItem = id => dispatch(removeTodo(id));
  const uid = useSelector(state => state.auth.id);
  const todoPositionClass = useSelector(state => state.todo.todoPosition);
  const columnTodoHandler = () => dispatch(todoPositionColumn());
  const listTodoHandler = () => dispatch(todoPositionList());
  const [favList, setFavList] = useState(false);

  useEffect(() => {
    fetchTodoList(uid);
  }, [fetchTodoList, uid]);

  let fetchedTodoList = <p>So far there are none todo :(</p>;

  if (favList) {
    todoList = todoList.filter(item => item[1].favorite !== false);
  }

  if (todoList && !loading && !error && todoList.length > 0) {
    fetchedTodoList = todoList.map(todoItem => (
      <TodoListItem
        to={`todo/${todoItem[0]}`}
        title={todoItem[1].title}
        text={todoItem[1].text}
        isFav={todoItem[1].favorite}
        key={todoItem[0]}
        onRemove={() => removeTodoItem(todoItem[0])}
      />
    ));
  }

  return (
    <div className="todo-list-page">
      <Button
        className={`todo-list-page__star${favList ? ' active' : ''}`}
        onClick={() => setFavList(prevState => !prevState)}
      >
        <StarIcon />
      </Button>
      <div className="todo-list-page__button">
        <Button onClick={listTodoHandler}>
          <ListButtonIcon />
        </Button>
        <Button onClick={columnTodoHandler}>
          <ColumnButtonIcon />
        </Button>
      </div>
      <div className={`container todo-list-page__inner${todoPositionClass ? '' : ' list-style'}`}>
        {loading ? <Loader /> : fetchedTodoList}
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
};

export default TodoListPage;
