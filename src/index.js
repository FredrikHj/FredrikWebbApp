import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './Components/Data/Redux/Store'

import MainApp from './MainApp';
import './Components/Style/MainStyle.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <MainApp />
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
