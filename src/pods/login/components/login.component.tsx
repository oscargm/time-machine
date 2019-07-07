import * as React from "react";
import "./login-styles.css";
import { ValidationValue } from "../../../common";

interface LoginFormProps {
  username: ValidationValue<string>;
  password: ValidationValue<string>;
  updateField: (
    fieldId: string,
    validationKey: string,
    newValue: string
  ) => void;
  onLogin: () => void;
}

export const LoginFormComponent = (props: LoginFormProps) => {
  const { username, password, updateField, onLogin } = props;
  return (
    <>
      <div id="login-form">
        <span>Username: </span>
        <input
          type="text"
          value={username.value}
          onChange={e =>
            updateField("username", username.validationKey, e.target.value)
          }
        />
        {username.error && <span>{username.errorMessage}</span>}
        <span>Password: </span>
        <input
          type="password"
          value={password.value}
          onChange={e =>
            updateField("password", password.validationKey, e.target.value)
          }
        />
        {password.error && <span>{password.errorMessage}</span>}
        <button onClick={onLogin}>Enter</button>
      </div>
    </>
  );
};
