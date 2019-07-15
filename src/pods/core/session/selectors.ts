import { createSelector } from "reselect";
import { Session } from "./store/model";
import { key } from "./consts";

const sessionSelector = (state: Session) => {
  return state[key];
};

export const getUsername = createSelector(
  sessionSelector,
  (state: Session): string => state.username
);

export const getToken = createSelector(
  sessionSelector,
  (state: Session): string => state.token
);

export const isLogedIn = createSelector(
  sessionSelector,
  (state: Session): boolean => state.token !== "" && state.logedInSince !== null
);

export const isLogedInSince = createSelector(
  sessionSelector,
  (state: Session): Date => state.logedInSince
);
