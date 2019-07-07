import { actionIds } from "./consts";
import { takeLatest, put } from "@redux-saga/core/effects";
import { loginFailed, updateValidatedField } from "./actions";
import {
  BaseAction,
  ValidationKeys,
  ValidationResult,
  validateUsername,
  validatePassword
} from "../../common";

function* submitLogin() {
  yield put(loginFailed("Wrong username or password"));
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
