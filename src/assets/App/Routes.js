import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from '@src/components/Loader/Loader';
import HomePage from '@src/containers/HomePage/HomePage';
import lazyLoad from '../lazyLoad/lazyLoad';
import { useSelector } from 'react-redux';

const Routes = () => {
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
        <Route path="/options" component={lazyLoad.optionsPage} />
        <Route path="/logout" component={lazyLoad.logout} />
        <Route path="/todo/:id" component={lazyLoad.todoPage} />
        <Route exact path="/sign-in" component={lazyLoad.singInPage} />
        <Route path="/copyright" component={lazyLoad.copyrightPage} />
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
