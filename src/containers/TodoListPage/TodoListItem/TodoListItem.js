import React from 'react';

import Button from '@src/components/UI/Button/Button';

const TodoListItem = ({ title, text, onRemove }) => {
  return (
    <div className="todo-list-item">
      <div className="todo-list-item__title">{title}</div>
      <div className="todo-list-item__text">{text}</div>
      <Button onClick={onRemove}>Remove item</Button>
    </div>
  );
};

export default TodoListItem;
