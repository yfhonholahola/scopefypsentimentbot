import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  const composeEnhancers = __DEV__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  enhancers.push(applyMiddleware(...middleware))


  const store = createStore(rootReducer, composeEnhancers(...enhancers))

  // Kick off the root saga
  sagaMiddleware.run(rootSaga)

  return { store }
}