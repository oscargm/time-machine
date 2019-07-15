import { history } from "../../../history";
import { BaseAction } from "../../../common";
import { actionIds, routes } from "./consts";

export const loginReducer = (action: BaseAction<any>) => {
  switch (action.type) {
    case actionIds.NAVIGATE_TO_DASHBOARD:
      history.push(routes.DASHBOARD);
      break;
    default:
      history.push(routes.LANDING);
      break;
  }
};
