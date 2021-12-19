import {
  FETCH_RESULTS,
  HIDE_BAR,
  SAVE_WORD,
  REMOVE_WORD,
  SHOW_BAR,
} from "./types";

const initialState = {
  results: {},
  saved: {},
  barVisible: false,
  barMessage: null,
  barTimer: null,
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
      return {
        ...state,
        saved: action.payload,
      };
    case SHOW_BAR:
      return {
        ...state,
        barVisible: true,
        barMessage: action.payload,
      };
    case HIDE_BAR:
      return {
        ...state,
        barVisible: false,
      };
    default:
      return state;
  }
}

export default appReducer;
