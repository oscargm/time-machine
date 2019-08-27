import { ValidationValue } from "@common";
export interface Login {
  username: ValidationValue<string>;
  password: ValidationValue<string>;
  error: boolean;
  errorMessage?: string;
}
