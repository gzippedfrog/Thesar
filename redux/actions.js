import {
  FETCH_RESULTS,
  HIDE_BAR,
  REMOVE_WORD,
  SAVE_WORD,
  SHOW_BAR,
} from "./types";

const key = "0a97f0e1-ac7e-41ca-9422-f61d039223b9";
const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";

export const fetchResults = (query) => async (dispatch) => {
  let response = await fetch(url + query + "?key=" + key);
  response = await response.json();
  const results = {};
  response.map((def) => (results[def.meta.uuid] = def));
  dispatch({ type: FETCH_RESULTS, payload: results });
};

export const saveWord = (word) => (dispatch) => {
  dispatch({
    type: SAVE_WORD,
    payload: word,
  });
  dispatch(showMessage("Card saved"));
};

export const removeWord = (word) => (dispatch, getState) => {
  const newSaved = { ...getState().saved };
  delete newSaved[word.meta.uuid];

  dispatch({
    type: REMOVE_WORD,
    payload: newSaved,
  });

  dispatch(showMessage("Card removed"));
};

export const showMessage = (message) => (dispatch, getState) => {
  // let timer = getState().barTimer;
  // clearTimeout(timer);
  dispatch({ type: HIDE_BAR });
  setTimeout(() => dispatch({ type: SHOW_BAR, payload: message }), 100);
  setTimeout(() => dispatch({ type: HIDE_BAR }), 3000);
};
