import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container">
        <h1 className="homepage__title">Welcome to the Todo App.</h1>
        <Link className="homepage__link" to="new-todo">
          Write First Todo
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
