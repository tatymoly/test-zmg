import { configureStore } from "@reduxjs/toolkit"
import votes from "./votesSlice"

const store = configureStore({
  reducer: {
    votes: votes,
  },
})

export default store
