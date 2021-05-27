import React, { useState } from 'react';

import Button from '@src/components/UI/Button/Button';
import { ReactComponent as StarIcon } from '@src/assets/img/star.svg';

const TodoListSort = props => {
  const { favList, setFavList, sortListAZ, setSortListAZ, sortListZA, setSortListZA } = props;
  const [visibleButtons, setVisibleButtons] = useState(false);

  return (
    <div className="todo-list-sort">
      <Button className="todo-list-sort__menu" onClick={() => setVisibleButtons(prevState => !prevState)}>
        Menu
      </Button>
      <div className={`todo-list-sort__buttons${visibleButtons ? ' active' : ''}`}>
        <Button
          className={`todo-list-sort__star${favList ? ' active' : ''}`}
          onClick={() => setFavList(prevState => !prevState)}
        >
          <StarIcon />
        </Button>
        <Button className={`todo-list-sort__list${sortListAZ ? ' active' : ''}`} onClick={setSortListAZ}>
          A-Z
        </Button>
        <Button className={`todo-list-sort__list${sortListZA ? ' active' : ''}`} onClick={setSortListZA}>
          Z-A
        </Button>
      </div>
    </div>
  );
};

export default TodoListSort;
