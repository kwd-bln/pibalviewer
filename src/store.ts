import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
import IState from './states/IState'
import { Reducer } from './reducer'
import thunk from "redux-thunk"

export type AppState = {
  state: IState
}

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers<AppState>({
    state: Reducer
  }),
  storeEnhancers(applyMiddleware(thunk))
)

export default store