import { createAction, createReducer } from "@reduxjs/toolkit";
import { CardsState, Word, Words } from "../types";
import { showMessage } from "./barSlice";
import { hideLoader, showLoader } from "./loaderSlice";
import { AppDispatch, RootState } from "./store";

const key = "802ed77c-a736-442e-88ad-7496371b49e4";
const url = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/";

const initialState: CardsState = {
  results: {},
  saved: {},
};

// Actions
const updateResults = createAction<Words>("cards/updateResults");
const saveWord = createAction<Word>("cards/saveWord");
const removeWord = createAction<Word>("cards/removeWord");
export const updateSaved =
  (word: Word) => (dispatch: AppDispatch, getState: () => RootState) => {
    let saved = getState().cards.saved;
    if (saved[word.meta.uuid]) {
      dispatch(removeWord(word));
      dispatch(showMessage("Card removed"));
    } else {
      dispatch(saveWord(word));
      dispatch(showMessage("Card saved"));
    }
  };

export const fetchResults =
  (query: string) => async (dispatch: AppDispatch) => {
    const results = {} as Words;
    dispatch(showLoader());
    try {
      const response = await fetch(url + query + "?key=" + key);
      const data: Array<Word> = await response.json();
      data.forEach((word) => (results[word.meta.uuid] = word));
    } catch (error: any) {
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
