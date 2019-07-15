import { Action } from "redux";

export interface BaseAction<T> extends Action {
  type: string;
  payload?: T;
}
