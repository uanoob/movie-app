import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import './index.css';
import App from './App';

import { BASE_URL } from './config';

import store from './store';

console.log('BASE_URL: ', BASE_URL);

axios.defaults.baseURL = BASE_URL;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
