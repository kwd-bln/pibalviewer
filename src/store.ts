import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import IState from './states/IState'
import { Reducer } from './reducer'
import rootSaga from './sagas'
import logger from 'redux-logger'
import history from './common/history'
// import createHistory from 'history/createHashHistory';
import { routerMiddleware, connectRouter, RouterState } from 'connected-react-router'

export type AppState = {
  state: IState
  router: RouterState
}

export default function configureStore(initialState?: AppState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers<AppState>({
      state: Reducer,
      router: connectRouter(history)
    }),
    initialState,
    applyMiddleware(
      sagaMiddleware, logger, routerMiddleware(history)
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};