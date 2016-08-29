import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import blossomApp from './reducers';
import App from './app/app';

import { Router, Route, browserHistory } from 'react-router';

let store = createStore(blossomApp)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/:query" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
