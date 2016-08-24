import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import blossomApp from './reducers';
import App from './app/app';

let store = createStore(blossomApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
