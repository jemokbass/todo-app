import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@src/components/UI/Button/Button';

const TodoListItem = ({ title, text, onRemove, to }) => {
  return (
    <Link className="todo-list-item" to={to}>
      <div className="todo-list-item__title">{title}</div>
      <div className="todo-list-item__text">{text}</div>
      <Button onClick={onRemove}>Remove item</Button>
    </Link>
  );
};

export default TodoListItem;
