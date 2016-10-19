import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store/createStore';
import MainContainer from './containers/Main';
import Home from './components/Home';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
