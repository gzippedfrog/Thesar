import { createSlice } from "@reduxjs/toolkit";
import { hideLoader, showLoader } from "./loaderSlice";

const key = "802ed77c-a736-442e-88ad-7496371b49e4";
const url = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/";

// Reducer
const cardsReducer = createSlice({
  name: "cards",
  initialState: {
    results: {},
    saved: {},
  },
  reducers: {
    updateResults: (state, action) => {
      state.results = action.payload;
    },
    saveWord: (state, action) => {
      const id = action.payload.meta.uuid;
      const word = action.payload;
      state.saved[id] = word;
    },
    removeWord: (state, action) => {
      const id = action.payload.meta.uuid;
      delete state.saved[id];
    },
  },
});

// Actions
export const { updateResults, saveWord, removeWord } = cardsReducer.actions;
export const fetchResults = (query) => async (dispatch) => {
  const results = {};
  try {
    dispatch(showLoader());
    let response = await fetch(url + query + "?key=" + key);
    response = await response.json();
    response.forEach((word) => (results[word.meta.uuid] = word));
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    dispatch(updateResults(results));
    dispatch(hideLoader());
  }
};

export default cardsReducer.reducer;
