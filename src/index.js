import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from '@src/assets/App/App';
import rootReducer from '@src/store/rootReducer'

import 'formbase';
import 'normalize.css';
import '@src/assets/styles/index.scss';


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
