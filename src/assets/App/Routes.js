import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Loader from '@src/components/Loader/Loader';
import HomePage from '@src/containers/HomePage/HomePage';
import lazyLoad from '../lazyLoad/lazyLoad';

const Routes = props => {
  const fallback = <Loader />;

  return (
    <>
      <Suspense fallback={fallback}>
        <Switch>
          <Route path="/todo-list" component={lazyLoad.todoListPage} />
          <Route path="/new-todo" component={lazyLoad.newTodoPage} />
          <Route exact path="/sign-up" component={lazyLoad.singUpPage} />
          <Route exact path="/sign-in" component={lazyLoad.singInPage} />
        </Switch>
      </Suspense>
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </>
  );
};

export default Routes;
