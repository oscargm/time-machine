import { ValidationValue } from "../../../common/types";
export interface Login {
  username: ValidationValue<string>;
  password: ValidationValue<string>;
  error: boolean;
  errorMessage?: string;
  logedIn: boolean;
  userToken?: string;
}
