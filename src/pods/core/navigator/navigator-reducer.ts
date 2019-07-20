import { history } from "../../../history";
import { BaseAction } from "../../../common";
import { actionIds, routes } from "./consts";
import { Navigation } from "./store/model";

const defaultState = (): Navigation => ({
  routeHistory: []
});

export const navigatorReducer = (state = defaultState(), action: BaseAction<any>) => {
  switch (action.type) {
    case actionIds.NAVIGATE_TO_DASHBOARD:
      console.log('blablabla', action);
      console.log('blablabla', history);
      //      history.push(routes.DASHBOARD);
      return { ...state, routeHistory: state.routeHistory.concat(routes.DASHBOARD) };
    default:
      //      history.push(routes.LANDING);
      return { ...state, routeHistory: state.routeHistory.concat(routes.LANDING) };
  }
};
