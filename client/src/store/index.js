import { combineReducers, createStore, applyMiddleware, compose  } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';

import orgReducers from './orgReducers'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const reducer = combineReducers({
  orgReducers,
})

const store = createStore(
  reducer,
  composeEnhancers()
)

export default store