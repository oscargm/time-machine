import { put } from "@redux-saga/core/effects";
import { createSession } from "./actions";

export function* createNewSession(token: string, username: string) {
  yield put(createSession(token, username));
}
