import {
  FETCH_RESULTS,
  HIDE_BAR,
  HIDE_LOADER,
  REMOVE_WORD,
  SAVE_WORD,
  SHOW_BAR,
  SHOW_LOADER,
} from "./types";

const key = "802ed77c-a736-442e-88ad-7496371b49e4";
const url = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/";

export const fetchResults = (query) => async (dispatch) => {
  const results = {};
  dispatch(showLoader());
  // await new Promise((res) => setTimeout(() => res(), 1000));

  try {
    let response = await fetch(url + query + "?key=" + key);
    response = await response.json();
    response.map((word) => (results[word.meta.uuid] = word));
  } finally {
    dispatch(hideLoader());
    dispatch({ type: FETCH_RESULTS, payload: results });
  }
};

export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });

export const saveWord = (word) => (dispatch) => {
  dispatch({ type: SAVE_WORD, payload: word });
  dispatch(showMessage("Card saved"));
};

export const removeWord = (word) => (dispatch) => {
  dispatch({ type: REMOVE_WORD, payload: word });
  dispatch(showMessage("Card removed"));
};

export const showMessage = (message) => (dispatch, getState) => {
  dispatch({ type: HIDE_BAR });
  clearTimeout(getState().bar.timer);
  let timer = setTimeout(() => dispatch({ type: HIDE_BAR }), 2000);
  setTimeout(
    () => dispatch({ type: SHOW_BAR, payload: { message, timer } }),
    100
  );
};
