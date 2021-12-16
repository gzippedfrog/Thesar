import { FETCH_RESULTS, SAVE_DEFINITION } from "./types";

const initialState = {
  results: [],
  saved: [],
  fetched: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULTS:
      return {
        ...state,
        results: action.payload,
        fetched: true,
      };
    case SAVE_DEFINITION:
      return {
        ...state,
        saved: [...state.saved, action.payload],
      };
    default:
      return state;
  }
}

export default appReducer;
