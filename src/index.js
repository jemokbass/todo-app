import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from '@src/assets/App/App';

import 'formbase';
import 'normalize.css';
import '@src/assets/styles/index.scss';
import todoReducer from './store/reducers/todoReducer';
const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
