import React, { useContext } from 'react';
import Confetti from 'react-confetti';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { LanguageContext } from '@src/shared/context';

const HomePage = () => {
  const successfulSignUp = useSelector(state => state.auth.successfulSignUp);
  const isAuth = useSelector(state => state.auth.isAuth);
  const isManyTodos = useSelector(state => state.todo.allTodo).length;
  const resources = useContext(LanguageContext);

  return (
    <section className="homepage">
      <div className="container">
        <h1 className="homepage__title">{resources.homepage_title}</h1>
        <Link className="homepage__link" to={isAuth ? '/new-todo' : '/sign-in'}>
          {isManyTodos > 0 ? resources.homepage_button : resources.homepage_button_first}
        </Link>
        <h2 className="homepage__subtitle">{resources.homepage_list_title}</h2>
        <ol className="homepage__list">
          <li className="homepage__item">{resources.homepage_list_item_1}</li>
          <li className="homepage__item">{resources.homepage_list_item_2}</li>
          <li className="homepage__item">{resources.homepage_list_item_3}</li>
          <li className="homepage__item">{resources.homepage_list_item_4}</li>
          <li className="homepage__item">{resources.homepage_list_item_5}</li>
          <li className="homepage__item">{resources.homepage_list_item_6}</li>
        </ol>
      </div>
      {successfulSignUp && <Confetti className="homepage__confetti" />}
    </section>
  );
};

export default HomePage;
