import { combineReducers } from "redux";
import { loginFormKey, loginReducer } from "@app/pods/login-form";
import { sessionKey, sessionReducer } from "@pods/core/session";
import { navigatorKey, navigatorReducer } from "@pods/core/navigator";

export default combineReducers({
  [loginFormKey]: loginReducer,
  [sessionKey]: sessionReducer,
  [navigatorKey]: navigatorReducer
});
