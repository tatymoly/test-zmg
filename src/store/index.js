import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import saga from "../sagas"
import votes from "./votes/votesSlice"

const reducer = {
  votes,
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

const store = configureStore({
  reducer,
  middleware,
})

sagaMiddleware.run(saga)

export default store
