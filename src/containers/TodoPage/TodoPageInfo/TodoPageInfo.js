import React, { useContext } from 'react';

import Button from '@src/components/UI/Button/Button';
import { ReactComponent as StarIcon } from '@src/assets/img/star.svg';
import { LanguageContext } from '@src/shared/context';

const TodoPageInfo = props => {
  const { todo, loading, removeHandler, editHandler } = props;
  const resources = useContext(LanguageContext);

  return (
    <>
      <Button className="todo-page__change-button" onClick={editHandler}>
        {resources.todo_edit}
      </Button>
      {todo.favorite && <StarIcon className="todo-page__star" />}
      <h3 className="todo-page__title">{todo.title}</h3>
      <div className="todo-page__text">{todo.text}</div>
      <Button className="todo-page__button" disabled={loading} onClick={removeHandler}>
        {resources.todo_remove}
      </Button>
    </>
  );
};

export default TodoPageInfo;
