import { createSelector } from "reselect";
import { Login } from "./store/model";
import { key } from "./consts";
import { ValidationValue } from "../../common";

const loginSelector = (state: Login) => {
  return state[key];
};

export const getUsername = createSelector(
  loginSelector,
  (state: Login): ValidationValue<string> => {
    return state.username;
  }
);

export const getPassword = createSelector(
  loginSelector,
  (state: Login): ValidationValue<string> => {
    return state.password;
  }
);
