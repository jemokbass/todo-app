import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h1 className="home-page__title">Welcome to the Todo App.</h1>
        <Link className="home-page__link" to="new-todo">
          Write First Todo
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
