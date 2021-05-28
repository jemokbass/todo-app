import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTodo, removeTodo, todoPositionColumn, todoPositionList } from '@src/store/actions/todoActions';
import Loader from '@src/components/Loader/Loader';
import TodoListItem from './TodoListItem/TodoListItem';
import Button from '@src/components/UI/Button/Button';
import { ReactComponent as ListButtonIcon } from '@src/assets/img/list-button.svg';
import { ReactComponent as ColumnButtonIcon } from '@src/assets/img/column-button.svg';
import { ReactComponent as ArrowIcon } from '@src/assets/img/arrow-bottom.svg';
import { sortArrAZ, sortArrZA } from '@src/shared/utility';
import TodoListSort from './TodoListSort/TodoListSort';
import { LanguageContext } from '@src/shared/context';

const TodoListPage = props => {
  const loading = useSelector(state => state.todo.fetchLoading);
  const error = useSelector(state => state.todo.fetchError);
  const todoList = useSelector(state => state.todo.allTodo);
  const dispatch = useDispatch();
  const fetchTodoList = useCallback(uid => dispatch(fetchTodo(uid)), [dispatch]);
  const removeTodoItem = id => dispatch(removeTodo(id));
  const uid = useSelector(state => state.auth.id);
  const todoPositionClass = useSelector(state => state.todo.todoPosition);
  const columnTodoHandler = () => dispatch(todoPositionColumn());
  const listTodoHandler = () => dispatch(todoPositionList());
  const [favList, setFavList] = useState(false);
  const [sortListAZ, setSortListAZ] = useState(false);
  const [sortListZA, setSortListZA] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  let currentTodoList = todoList;
  const resources = useContext(LanguageContext);

  useEffect(() => {
    fetchTodoList(uid);
  }, [fetchTodoList, uid]);

  let fetchedTodoList = <p className="todo-list-page__desc">{resources.todo_list_empty}</p>;

  if (searchValue) {
    currentTodoList = todoList.filter(item => item[1].title.indexOf(searchValue) !== -1);
  }

  if (sortListAZ) {
    currentTodoList = sortArrAZ(todoList);
  }

  if (sortListZA) {
    currentTodoList = sortArrZA(todoList);
  }

  if (!sortListAZ && !sortListZA && !favList) {
    currentTodoList = todoList.sort();
  }

  if (favList) {
    currentTodoList = todoList.filter(item => item[1].favorite !== false);
  }

  if (todoList && !loading && !error && todoList.length > 0) {
    fetchedTodoList = currentTodoList.map(todoItem => (
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

  let positionButtons = (
    <div className="todo-list-page__button">
      <Button onClick={listTodoHandler}>
        <ListButtonIcon />
      </Button>
      <Button onClick={columnTodoHandler}>
        <ColumnButtonIcon />
      </Button>
    </div>
  );

  if (window.innerWidth < 650) {
    positionButtons = null;
  }

  return (
    <div className="todo-list-page">
      <TodoListSort
        favList={favList}
        setFavList={setFavList}
        sortListAZ={sortListAZ}
        setSortListAZ={() => {
          setSortListAZ(prevState => !prevState);
          setSortListZA(false);
        }}
        sortListZA={sortListZA}
        setSortListZA={() => {
          setSortListZA(prevState => !prevState);
          setSortListAZ(false);
        }}
      />
      {positionButtons}
      <div className="todo-list-page__search">
        <span>
          {resources.todo_list_search} <ArrowIcon />
        </span>
        <label className="label">
          <input
            className="input"
            placeholder={resources.todo_list_search_placeholder}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            type="text"
          />
        </label>
      </div>
      <div className={`container todo-list-page__inner${todoPositionClass ? '' : ' list-style'}`}>
        {loading ? <Loader /> : fetchedTodoList}
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
};

export default TodoListPage;
