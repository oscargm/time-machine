import { combineReducers } from "redux";
import { loginKey } from "./pods/login";
import { loginReducer } from "./pods/login/store/login.reducer";

export default combineReducers({
  [loginKey]: loginReducer
});
