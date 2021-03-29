import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

import Loader from '@src/components/Loader/Loader';
import HomePage from '@src/containers/HomePage/HomePage';
import lazyLoad from '../lazyLoad/lazyLoad';

const Routes = props => {
  const fallback = <Loader />;

  return (
    <>
      <Suspense fallback={fallback}>
        <Route path="/todo-list" component={lazyLoad.todoListPage} />
        <Route path="/new-todo" component={lazyLoad.newTodoPage} />
        <Route path="/sign-up" component={lazyLoad.singUpPage} />
        <Route path="/sign-in" component={lazyLoad.singInPage} />
      </Suspense>
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </>
  );
};

export default Routes;
