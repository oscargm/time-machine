import { connect } from "react-redux";
import { LoginFormComponent } from "./components/login.component";
import { validateField, login } from "./actions";
import { getUsername, getPassword } from "./selectors";

const mapStateToProps = state => ({
  username: getUsername(state),
  password: getPassword(state)
});

const mapDispatchToProps = dispatch => ({
  updateField: (fieldId: string, validationKey: string, newValue: string) =>
    dispatch(validateField(fieldId, validationKey, newValue)),
  onLogin: () => dispatch(login())
});

export const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);
