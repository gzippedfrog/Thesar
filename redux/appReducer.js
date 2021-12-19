import {
  FETCH_RESULTS,
  HIDE_BAR,
  SAVE_DEFINITION,
  REMOVE_DEFINITION,
  SHOW_BAR,
} from "./types";

const initialState = {
  results: {},
  saved: {},
  barVisible: false,
  barMsg: null,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    case SAVE_DEFINITION:
      return {
        ...state,
        saved: {
          ...state.saved,
          [action.payload.meta.uuid]: action.payload,
        },
      };
    case REMOVE_DEFINITION:
      return {
        ...state,
        saved: action.payload,
      };
    case SHOW_BAR:
      return {
        ...state,
        barVisible: true,
        barMsg: action.payload,
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
