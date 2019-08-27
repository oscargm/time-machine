import { loginFormRootSaga } from "@app/pods/login-form";
import { all } from "@redux-saga/core/effects";

export function* rootSaga() {
  yield all([loginFormRootSaga()]);
}
