import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { logger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);
sagaMiddleware.run(rootSaga);
