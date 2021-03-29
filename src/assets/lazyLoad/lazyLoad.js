import { lazy } from 'react';

const singInPage = lazy(() => import('@src/containers/SignInPage/SignInPage'));
const singUpPage = lazy(() => import('@src/containers/SignUpPage/SignUpPage'));
const newTodoPage = lazy(() => import('@src/containers/NewTodoPage/NewTodoPage'));
const todoListPage = lazy(() => import('@src/containers/TodoListPage/TodoListPage'));

const lazyLoad = {
  singInPage,
  singUpPage,
  newTodoPage,
  todoListPage,
};

export default lazyLoad;
