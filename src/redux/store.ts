import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { counter } from './reducers';
import { mainSaga } from './sagas/mainSaga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    REDUX_INITIAL_DATA: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  counter,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(mainSaga);

export const action = (type: string) => store.dispatch({type})
