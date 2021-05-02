import React from 'react';

import Button from '@src/components/UI/Button/Button';

const TodoPageInfo = props => {
  const { todo, loading, removeHandler, editHandler } = props;

  return (
    <>
      <Button className="todo-page__change-button" onClick={editHandler}>
        Edit this item?
      </Button>
      <h3 className="todo-page__title">{todo.title}</h3>
      <div className="todo-page__text">{todo.text}</div>
      <Button className="todo-page__button" disabled={loading} onClick={removeHandler}>
        Remove todo
      </Button>
    </>
  );
};

export default TodoPageInfo;
