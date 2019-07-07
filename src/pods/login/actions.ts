import { BaseAction, ValidationValue } from "../../common";
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

export const login = () => ({
  type: actionIds.LOGIN_ACTION
});

export const loginSuccess = (userToken: string): BaseAction<string> => ({
  type: actionIds.LOGIN_SUCCESS,
  payload: userToken
});

export const loginFailed = (errorMessage: string): BaseAction<string> => ({
  type: actionIds.LOGIN_FAILED,
  payload: errorMessage
});
