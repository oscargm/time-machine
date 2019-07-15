import { BaseAction } from "../../../../common";
import { Session } from "./model";
import { actionIds } from "../consts";

const defaultState = (): Session => ({
  token: "",
  username: "",
  logedInSince: null
});

export const sessionReducer = (
  state = defaultState(),
  action: BaseAction<any>
) => {
  switch (action.type) {
    case actionIds.CREATE_SESSION:
      const { token, username } = action.payload;
      return { ...state, token, username, logedInSince: new Date() };
    default:
      return { ...state };
  }
};
