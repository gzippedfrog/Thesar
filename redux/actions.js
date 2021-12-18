import { FETCH_RESULTS, HIDE_BAR, SAVE_DEFINITION, SHOW_BAR } from "./types";

const key = "0a97f0e1-ac7e-41ca-9422-f61d039223b9";
const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";

export const fetchResults = (query) => async (dispatch) => {
  let response = await fetch(url + query + "?key=" + key);
  response = await response.json();
  dispatch({ type: FETCH_RESULTS, payload: response });
};

export const saveDefinition = (definition) => (dispatch) => {
  dispatch({
    type: SAVE_DEFINITION,
    payload: definition,
  });

  dispatch({ type: SHOW_BAR });
  setTimeout(() => dispatch({ type: HIDE_BAR }), 2000);
};
