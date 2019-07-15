import { combineReducers } from "redux";
import { loginKey } from "./pods/login";
import { loginReducer } from "./pods/login/store/login.reducer";
import { sessionKey } from "./pods/core/session";
import { sessionReducer } from "./pods/core/session";

export default combineReducers({
  [loginKey]: loginReducer,
  [sessionKey]: sessionReducer
});
