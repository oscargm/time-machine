import * as React from "react";
import "./login-styles.css";
import { ValidationValue } from "../../../common";
import { WithSession } from "../../core/session/hoc/with-session";
import { routes } from "../../core/navigator";

interface LoginFormProps extends WithSession {
  history: any;
  username: ValidationValue<string>;
  password: ValidationValue<string>;
  updateField: (
    fieldId: string,
    validationKey: string,
    newValue: string
  ) => void;
  onLogin: (username: string, password: string) => void;
}

export const LoginFormComponent = (props: LoginFormProps) => {
  const { username, password, updateField, onLogin, history, logedIn } = props;
  React.useEffect(() => {
    if (logedIn) {
      history.push(routes.DASHBOARD);
    }
  }, [logedIn]);
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
        <button
          onClick={() => onLogin(username.value, password.value)}
          disabled={username.error || password.error}
        >
          Enter
        </button>
      </div>
    </>
  );
};
