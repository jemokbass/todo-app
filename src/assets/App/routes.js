import HomePage from '@src/containers/HomePage/HomePage';
import React from 'react';
import { Redirect, Route } from 'react-router';
import { newTodoPage, singInPage, singUpPage, todoListPage } from '../lazyLoad/lazyLoad';

const Routes = props => {
  return (
    <>
      <Route exact path="todo-list" component={todoListPage} />
      <Route exact path="new-todo" component={newTodoPage} />
      <Route exact path="sign-up" component={singUpPage} />
      <Route exact path="sign-in" component={singInPage} />
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </>
  );
};

export default Routes;
