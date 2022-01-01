import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { hideLoader, showLoader } from "./loaderSlice";

const key = "802ed77c-a736-442e-88ad-7496371b49e4";
const url = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/";

export interface Word {
  meta: {
    uuid: string;
  };
}

interface Words {
  [index: string]: Word;
}

interface CardsState {
  results: Words;
  saved: Words;
}

const initialState: CardsState = {
  results: {},
  saved: {},
};

// Actions
export const updateResults = createAction<Words>("cards/updateResults");
export const saveWord = createAction<Word>("cards/saveWord");
export const removeWord = createAction<Word>("cards/removeWord");
export const fetchResults = (query) => async (dispatch) => {
  const results = {};
  try {
    dispatch(showLoader());
    const response = await fetch(url + query + "?key=" + key);
    const data: Array<Word> = await response.json();
    data.forEach((word) => (results[word.meta.uuid] = word));
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    dispatch(updateResults(results));
    dispatch(hideLoader());
  }
};

// Reducer
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
