import 'regenerator-runtime/runtime';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/App/App';
import store from './store';

import './theme/globalStyle';

const rootEl = document.getElementById('root');

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>,
    rootEl,
  );
};

renderApp(App);

if (module.hot) module.hot.accept('./components/App/App', () => renderApp(App));
