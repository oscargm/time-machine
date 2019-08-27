import { BaseAction } from "@common";
import { actionIds } from "./consts";

export const validateField = (
  fieldId: string,
  validationKey: string,
  newValue: string
): BaseAction<{
  fieldId: string;
  validationKey: string;
  newValue: string;
}> => ({
  type: actionIds.VALIDATE_FIELD,
  payload: {
    fieldId,
    validationKey,
    newValue
  }
});

export const updateValidatedField = (
  fieldId: string,
  newValue: string,
  error: boolean,
  errorMessage: string
): BaseAction<{
  fieldId: string;
  newValue: string;
  error: boolean;
  errorMessage: string;
}> => ({
  type: actionIds.UPDATE_FIELD,
  payload: {
    fieldId,
    newValue,
    error,
    errorMessage
  }
});

export const login = (username: string, password: string) => ({
  type: actionIds.LOGIN_ACTION,
  payload: {
    username,
    password
  }
});

export const loginFailed = (errorMessage: string): BaseAction<string> => ({
  type: actionIds.LOGIN_FAILED,
  payload: errorMessage
});
