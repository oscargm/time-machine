import { BaseAction } from "../../../../src/common";
import { actionIds } from "./consts";
export const createSession = (
  token: string,
  username: string
): BaseAction<{ token: string; username: string }> => ({
  type: actionIds.CREATE_SESSION,
  payload: {
    token,
    username
  }
});
