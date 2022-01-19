import { createReducer } from "@reduxjs/toolkit";
import { removeWord, saveWord, updateResults } from "./actions";
import type { CardsState } from "./types";

const initialState: CardsState = {
  results: {},
  saved: {},
};

const cardsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateResults, (state, action) => {
      state.results = action.payload;
    })
    .addCase(saveWord, (state, action) => {
      const id = action.payload.meta.uuid;
      const word = action.payload;
      state.saved[id] = word;
    })
    .addCase(removeWord, (state, action) => {
      const id = action.payload.meta.uuid;
      delete state.saved[id];
    });
});

export default cardsReducer;
