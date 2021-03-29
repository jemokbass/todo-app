import React, { lazy, Suspense } from 'react';

import Loader from '@src/components/Loader/Loader';
import NewTodoPage from '@src/containers/NewTodoPage/NewTodoPage';
import SignInPage from '@src/containers/SignInPage/SignInPage';
import SignUpPage from '@src/containers/SignUpPage/SignUpPage';
import TodoListPage from '@src/containers/TodoListPage/TodoListPage';

const fallback = <Loader />;

export const singInPage = (
  <Suspense fallback={fallback}>
    {lazy(() => (
      <SignInPage />
    ))}
  </Suspense>
);

export const singUpPage = (
  <Suspense fallback={fallback}>
    {lazy(() => (
      <SignUpPage />
    ))}
  </Suspense>
);

export const newTodoPage = (
  <Suspense fallback={fallback}>
    {lazy(() => (
      <NewTodoPage />
    ))}
  </Suspense>
);

export const todoListPage = (
  <Suspense fallback={fallback}>
    {lazy(() => (
      <TodoListPage />
    ))}
  </Suspense>
);
