import React from 'react';
import reactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';

import 'semantic-ui-css/semantic.min.css';

import { reducer } from './reducer';

const store = createStore(reducer, applyMiddleware(thunk, logger));

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
