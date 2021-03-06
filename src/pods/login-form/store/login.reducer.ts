import { Login } from "./model";
import { BaseAction } from "@common";
import { actionIds } from "../consts";
import { ValidationKeys } from "@common";
const defaultState = (): Login => ({
  username: {
    value: "",
    validationKey: ValidationKeys.USERNAME,
    error: true,
    errorMessage: "Wrong username"
  },
  password: {
    value: "",
    validationKey: ValidationKeys.PASSWORD,
    error: true,
    errorMessage: "Wrong password"
  },
  error: false,
  errorMessage: ""
});

export const loginReducer = (
  state = defaultState(),
  action: BaseAction<any>
) => {
  switch (action.type) {
    case actionIds.UPDATE_FIELD:
      return {
        ...state,
        [action.payload.fieldId]: {
          ...state[action.payload.fieldId],
          value: action.payload.newValue,
          error: action.payload.error,
          errorMessage: action.payload.errorMessage
        }
      };
    case actionIds.LOGIN_FAILED:
      return {
        ...state,
        logedIn: false,
        error: true,
        errorMessage: action.payload
      };
    default:
      return { ...state };
  }
};
