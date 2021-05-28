import React, { useContext } from 'react';
import Confetti from 'react-confetti';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { LanguageContext } from '@src/shared/context';

const HomePage = props => {
  const successfulSignUp = useSelector(state => state.auth.successfulSignUp);
  const isAuth = useSelector(state => state.auth.isAuth);
  const resources = useContext(LanguageContext);

  return (
    <div className="homepage">
      <div className="container">
        <h1 className="homepage__title">{resources.homepage_title}</h1>
        <Link className="homepage__link" to={isAuth ? '/new-todo' : '/sign-in'}>
          {resources.homepage_button}
        </Link>
      </div>
      {successfulSignUp && <Confetti className="homepage__confetti" />}
    </div>
  );
};

export default HomePage;
