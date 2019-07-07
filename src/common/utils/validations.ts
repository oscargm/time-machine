import { ValidationResult } from "../types";

export const validateUsername = (value: string): ValidationResult => {
  const testError = !RegExp("^(?!s*$).+").test(value);

  return { error: testError, errorMessage: testError ? "Wrong username" : "" };
};
export const validatePassword = (value: string): ValidationResult => {
  const testError = !RegExp("^(?!s*$).+").test(value);

  return { error: testError, errorMessage: testError ? "Wrong password" : "" };
};
