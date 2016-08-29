import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import HomePage from './components/home/HomePage.js';

import configureStore from './store/configureStore';

import { loadTrads } from './actions/tradsAction';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();
store.dispatch(loadTrads());

const Routes = (props) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
      </Route>
    </Router>
  </Provider>
);

const app = document.getElementById('app');
if (app) {
  ReactDOM.render(<Routes />, app);
}
