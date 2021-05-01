import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@src/components/UI/Button/Button';

const TodoListItem = ({ title, text, onRemove, to }) => {
  return (
    <div className="todo-list-item">
      <Link className="todo-list-item__title" to={to}>
        {title}
      </Link>
      <div className="todo-list-item__text">{text}</div>
      <Button onClick={onRemove}>Remove item</Button>
    </div>
  );
};

export default TodoListItem;
