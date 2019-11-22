import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware, logger);
  const store = createStore(rootReducer, preloadedState, middleware);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
