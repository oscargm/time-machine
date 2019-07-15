import { actionIds } from "./consts";
import { takeLatest, put, call } from "@redux-saga/core/effects";
import { loginFailed, updateValidatedField } from "./actions";
import {
  BaseAction,
  ValidationKeys,
  ValidationResult,
  validateUsername,
  validatePassword
} from "../../common";
import { createNewSession } from "../core/session/sagas";
import { navigateToDashboard, routes } from "../core/navigator";
import { history } from "../../history";
function* submitLogin(action) {
  // yield put(loginFailed("Wrong username or password"));
  console.log("action", action);
  yield call(createNewSession, "token", action.payload.username);
  //yield put(navigateToDashboard());
  history.push(routes.DASHBOARD);
}

function* validateField(
  action: BaseAction<{
    fieldId: string;
    validationKey: string;
    newValue: string;
  }>
) {
  let validationResult: ValidationResult;
  switch (action.payload.validationKey) {
    case ValidationKeys.USERNAME:
      validationResult = validateUsername(action.payload.newValue);
      break;
    case ValidationKeys.PASSWORD:
      validationResult = validatePassword(action.payload.newValue);
      break;
    default:
      validationResult = { error: false, errorMessage: "" };
  }
  yield put(
    updateValidatedField(
      action.payload.fieldId,
      action.payload.newValue,
      validationResult.error,
      validationResult.errorMessage
    )
  );
}

export function* loginRootSaga() {
  yield takeLatest(actionIds.VALIDATE_FIELD, validateField);
  yield takeLatest(actionIds.LOGIN_ACTION, submitLogin);
}
