import { lazy } from 'react';

const singInPage = lazy(() => import('@src/containers/SignInPage/SignInPage'));
const singUpPage = lazy(() => import('@src/containers/SignUpPage/SignUpPage'));
const newTodoPage = lazy(() => import('@src/containers/NewTodoPage/NewTodoPage'));
const todoListPage = lazy(() => import('@src/containers/TodoListPage/TodoListPage'));
const logout = lazy(() => import('@src/containers/Logout/Logout'));
const optionsPage = lazy(() => import('@src/containers/OptionsPage/OptionsPage'));
const todoPage = lazy(() => import('@src/containers/TodoPage/TodoPage'));
const copyrightPage = lazy(() => import('@src/containers/CopyrightPage/CopyrightPage'));

const lazyLoad = {
  singInPage,
  singUpPage,
  newTodoPage,
  todoListPage,
  logout,
  optionsPage,
  todoPage,
  copyrightPage,
};

export default lazyLoad;
