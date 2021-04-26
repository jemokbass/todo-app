import React from 'react';
import Confetti from 'react-confetti';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = props => {
  const successfulSignUp = useSelector(state => state.auth.successfulSignUp);
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <div className="homepage">
      <div className="container">
        <h1 className="homepage__title">Welcome to the Todo App.</h1>
        <Link className="homepage__link" to={isAuth ? '/new-todo' : '/sign-in'}>
          Write First Todo
        </Link>
      </div>
      {successfulSignUp && <Confetti className="homepage__confetti" />}
    </div>
  );
};

export default HomePage;
