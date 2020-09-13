import { takeEvery, put } from "redux-saga/effects"

import TYPES from "./votesTypes"
import { votesActions } from "../../store/votes/votesSlice"

import data from "../../assets/data"

function* fetchVotes() {
  try {
    let votes = JSON.parse(localStorage.getItem("candidates"))
    yield put(votesActions.setVotesFromLocalStore(votes ? votes : data))
  } catch (e) {
    console.error(e)
  }
}

function* setVotes({ payload }) {
  try {
    const data = JSON.stringify(payload)
    yield localStorage.setItem("candidates", data)
  } catch (e) {
    console.error(e)
  }
}

function* votesSagas() {
  yield takeEvery(TYPES.FETCH_VOTES, fetchVotes)
  yield takeEvery(TYPES.SET_VOTES, setVotes)
}

export default votesSagas
