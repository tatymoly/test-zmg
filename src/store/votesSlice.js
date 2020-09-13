import { createSlice } from "@reduxjs/toolkit"

const votesSlice = createSlice({
  name: "votes",
  initialState: {
    fetching: false,
    candidates: [],
  },
  reducers: {
    setVotesFromLocalStore: (state, action) => {
      state.candidates = action.payload
    },
    voteUp: (state, action) => {
      const newCandidates = state.candidates.map(candidate => {
        if (candidate.id === action.payload) {
          const currentVote = candidate.positive
          return { ...candidate, positive: currentVote + 1 }
        }
        return candidate
      })
      state.candidates = newCandidates
    },
    voteDown: (state, action) => {
      const newCandidates = state.candidates.map(candidate => {
        if (candidate.id === action.payload) {
          const currentVote = candidate.negative
          return { ...candidate, negative: currentVote + 1 }
        }
        return candidate
      })
      state.candidates = newCandidates
    },
  },
})

export default votesSlice.reducer

export const { actions: votesActions } = votesSlice
