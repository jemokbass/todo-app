import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as StarIcon } from '@src/assets/img/star.svg';
import Button from '@src/components/UI/Button/Button';

const TodoListItem = props => {
  const { title, text, onRemove, to, isFav } = props;

  return (
    <div className="todo-list-item">
      {isFav && <StarIcon className="todo-list-item__star" />}
      <Link className="todo-list-item__title" to={to}>
        {title}
      </Link>
      <div className="todo-list-item__text">{text}</div>
      <Button onClick={onRemove}>Remove item</Button>
    </div>
  );
};

export default TodoListItem;
