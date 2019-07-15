import { connect } from "react-redux";
import { withRouter } from "react-router";
import { LoginFormComponent } from "./components/login.component";
import { validateField, login } from "./actions";
import { getUsername, getPassword } from "./selectors";
import { withSession } from "../core/session";

const mapStateToProps = state => ({
  username: getUsername(state),
  password: getPassword(state)
});

const mapDispatchToProps = dispatch => ({
  updateField: (fieldId: string, validationKey: string, newValue: string) =>
    dispatch(validateField(fieldId, validationKey, newValue)),
  onLogin: (username: string, password: string) =>
    dispatch(login(username, password))
});

export const LoginForm = withSession(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(LoginFormComponent)
  )
);
