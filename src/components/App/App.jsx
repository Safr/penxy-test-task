import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import HomePage from '../Home/HomePage';
import AccountPage from '../AccountPage/AccountPage';

const showApp = () => (
  <React.Fragment>
    <Switch>
      <Route path="/account" component={AccountPage} />
    </Switch>
  </React.Fragment>
);

const App = () => (
  <ScrollToTop>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
    <Route path="/(.+)" render={showApp} />
  </ScrollToTop>
);

export default hot(module)(App);
