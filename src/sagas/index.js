import { all } from "redux-saga/effects"

import votesSagas from "./votes/votesSagas"

export default function* rootSaga() {
  yield all([votesSagas()])
}
