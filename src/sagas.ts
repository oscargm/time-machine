import { loginRootSaga } from "@pods/login";
import { all } from "@redux-saga/core/effects";

export function* rootSaga() {
  yield all([loginRootSaga()]);
}
