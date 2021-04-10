import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from '@src/components/Loader/Loader';
import HomePage from '@src/containers/HomePage/HomePage';
import lazyLoad from '../lazyLoad/lazyLoad';
import { useSelector } from 'react-redux';

const Routes = props => {
  const fallback = <Loader />;
  const isAuth = useSelector(state => state.auth.isAuth);

  let routes = (
    <>
      <Route exact path="/sign-up" component={lazyLoad.singUpPage} />
      <Route exact path="/sign-in" component={lazyLoad.singInPage} />
    </>
  );

  if (isAuth) {
    routes = (
      <>
        <Route path="/todo-list" component={lazyLoad.todoListPage} />
        <Route path="/new-todo" component={lazyLoad.newTodoPage} />
        <Route path="/logout" component={lazyLoad.logout} />
      </>
    );
  }

  return (
    <>
      <Suspense fallback={fallback}>
        <Switch>{routes}</Switch>
      </Suspense>
      <Route exact path="/" component={HomePage} />
    </>
  );
};

export default Routes;