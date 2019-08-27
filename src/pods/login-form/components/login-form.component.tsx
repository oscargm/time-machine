import * as React from "react";
import "./login-form.styles.css";
import { ValidationValue } from "@common";
import { WithSession } from "@pods/core/session/hoc/with-session";
import { routes } from "@pods/core/navigator";

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
  const [isChanged, setChanged] = React.useState(false);
  React.useEffect(() => {
    if (logedIn) {
      history.push(routes.DASHBOARD);
    }
  }, [logedIn]);

  const onFieldChange = (fieldName, validationKey, value) => {
    setChanged(true);
    updateField(fieldName, validationKey, value);
  };
  return (
    <>
      <div id="login-form">
        <span>Username: </span>
        <input
          type="text"
          value={username.value}
          onChange={e =>
            onFieldChange("username", username.validationKey, e.target.value)
          }
        />
        {username.error && isChanged && <span>{username.errorMessage}</span>}
        <span>Password: </span>
        <input
          type="password"
          value={password.value}
          onChange={e =>
            onFieldChange("password", password.validationKey, e.target.value)
          }
        />
        {password.error && isChanged && <span>{password.errorMessage}</span>}
        <button
          onClick={() => onLogin(username.value, password.value)}
          disabled={username.error || password.error || !isChanged}
        >
          Enter
        </button>
      </div>
    </>
  );
};
