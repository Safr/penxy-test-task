import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  // thunk,
];
const middlewareEnhancer = applyMiddleware(sagaMiddleware);
const storeEnhancers = [middlewareEnhancer];

const store = createStore(
  reducer,
  composeWithDevTools(
    ...storeEnhancers,
  ),
);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const newRootReducer = require('../reducers').default;
      store.replaceReducer(newRootReducer);
    });
  }
}

store.runSaga = (...args) => sagaMiddleware.run(...args);
store.runSaga(rootSaga);

export default store;
