import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as StarIcon } from '@src/assets/img/star.svg';
import Button from '@src/components/UI/Button/Button';
import { LanguageContext } from '@src/shared/context';

const TodoListItem = props => {
  const { title, text, onRemove, to, isFav } = props;
  const resources = useContext(LanguageContext);

  return (
    <div className="todo-list-item">
      {isFav && <StarIcon className="todo-list-item__star" />}
      <Link className="todo-list-item__title" to={to}>
        {title}
      </Link>
      <div className="todo-list-item__text">{text}</div>
      <Button onClick={onRemove}>{resources.todo_list_item_remove}</Button>
    </div>
  );
};

export default TodoListItem;
