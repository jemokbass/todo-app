import React, { useContext, useState } from 'react';

import Button from '@src/components/UI/Button/Button';
import { ReactComponent as StarIcon } from '@src/assets/img/star.svg';
import { LanguageContext } from '@src/shared/context';

const TodoListSort = props => {
  const { favList, setFavList, sortListAZ, setSortListAZ, sortListZA, setSortListZA } = props;
  const [visibleButtons, setVisibleButtons] = useState(false);
  const resources = useContext(LanguageContext);

  return (
    <div className="todo-list-sort">
      <Button className="todo-list-sort__menu" onClick={() => setVisibleButtons(prevState => !prevState)}>
        {resources.todo_list_sort_menu}
      </Button>
      <div className={`todo-list-sort__buttons${visibleButtons ? ' active' : ''}`}>
        <Button
          className={`todo-list-sort__star${favList ? ' active' : ''}`}
          onClick={() => setFavList(prevState => !prevState)}
        >
          <StarIcon />
        </Button>
        <Button className={`todo-list-sort__list${sortListAZ ? ' active' : ''}`} onClick={setSortListAZ}>
          {resources.todo_list_sort_az}
        </Button>
        <Button className={`todo-list-sort__list${sortListZA ? ' active' : ''}`} onClick={setSortListZA}>
          {resources.todo_list_sort_za}
        </Button>
      </div>
    </div>
  );
};

export default TodoListSort;
