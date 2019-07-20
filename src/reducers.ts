import { combineReducers } from "redux";
import { loginKey, loginReducer } from "./pods/login";
import { sessionKey, sessionReducer } from "./pods/core/session";
import { navigatorKey, navigatorReducer } from "./pods/core/navigator";

export default combineReducers({
  [loginKey]: loginReducer,
  [sessionKey]: sessionReducer,
  [navigatorKey]: navigatorReducer
});
