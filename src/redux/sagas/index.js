import { all } from "redux-saga/effects";
import handleLaunchesSaga from "./handleLaunchesSaga";

// some sagas trigger other sagas
export default function* rootSaga() {
  yield all([
    handleLaunchesSaga(),
  ]);
}