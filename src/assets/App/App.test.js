import React from 'react';
import { render, screen } from '@testing-library/react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import rootReducer from '@src/store/rootReducer';

describe('App component', () => {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

  it('Should render App component', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });
});
