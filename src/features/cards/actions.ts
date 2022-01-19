import { createAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../../redux/store";
import { showMessage } from "../bar/actions";
import { hideLoader, showLoader } from "../loader/actions";
import type { Word, Words } from "./types";

const key = "802ed77c-a736-442e-88ad-7496371b49e4";
const url = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/";

export const saveWord = createAction<Word>("cards/saveWord");
export const removeWord = createAction<Word>("cards/removeWord");
export const updateResults = createAction<Words>("cards/updateResults");

export const updateSaved =
  (word: Word) => (dispatch: AppDispatch, getState: () => RootState) => {
    const saved = getState().cards.saved;
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
