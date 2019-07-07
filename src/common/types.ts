export interface ValidationValue<T> {
  value: T;
  validationKey: ValidationKeys;
  error: boolean;
  errorMessage: string;
}

export enum ValidationKeys {
  USERNAME = "USERNAME",
  PASSWORD = "PASSWORD"
}

export interface ValidationResult {
  error: boolean;
  errorMessage: string;
}
