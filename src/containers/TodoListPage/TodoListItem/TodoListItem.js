import Loader from '@src/components/Loader/Loader';
import Button from '@src/components/UI/Button/Button';
import React from 'react';

const TodoListItem = ({ title, text, onRemove, loading, error }) => {
  return (
    <div className="todo-list-item">
      <div className="todo-list-item__title">{title}</div>
      <div className="todo-list-item__text">{text}</div>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      <Button onClick={onRemove}>Remove item</Button>
    </div>
  );
};

export default TodoListItem;
