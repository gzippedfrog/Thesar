import { FETCH_RESULTS, SAVE_DEFINITION } from "./types";

const key = "0a97f0e1-ac7e-41ca-9422-f61d039223b9";
const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";

export function fetchResults(query) {
  return async (dispatch) => {
    let response = await fetch(url + query + "?key=" + key);
    response = await response.json();
    dispatch({ type: FETCH_RESULTS, payload: response });
  };
}

export function saveDefinition(definition) {
  return {
    type: SAVE_DEFINITION,
    payload: definition,
  };
}
