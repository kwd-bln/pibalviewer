import { combineReducers, createStore, applyMiddleware} from 'redux'
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
  const middlewares = [sagaMiddleware, routerMiddleware(history)]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }
  const store = createStore(
    combineReducers<AppState>({
      state: Reducer,
      router: connectRouter(history)
    }),
    initialState,
    applyMiddleware(
      ...middlewares
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};