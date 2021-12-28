import { FETCH_RESULTS, SAVE_WORD, REMOVE_WORD } from "../types";

const initialState = {
  results: {},
  saved: {},
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    case SAVE_WORD:
      return {
        ...state,
        saved: {
          ...state.saved,
          [action.payload.meta.uuid]: action.payload,
        },
      };
    case REMOVE_WORD:
      const newSaved = { ...state.saved };
      delete newSaved[action.payload.meta.uuid];
      return {
        ...state,
        saved: newSaved,
      };
    default:
      return state;
  }
}

export default appReducer;
