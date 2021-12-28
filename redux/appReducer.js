import {
  FETCH_RESULTS,
  HIDE_BAR,
  SAVE_WORD,
  REMOVE_WORD,
  SHOW_BAR,
  SHOW_LOADER,
  HIDE_LOADER,
} from "./types";

const initialState = {
  results: {},
  saved: {},
  bar: {
    visible: false,
    message: null,
    timer: null,
  },
  isLoading: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
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
    case SHOW_BAR:
      return {
        ...state,
        bar: {
          visible: true,
          message: action.payload.message,
          timer: action.payload.timer,
        },
      };
    case HIDE_BAR:
      return {
        ...state,
        bar: {
          visible: false,
          message: null,
          timer: state.bar.timer,
        },
      };
    default:
      return state;
  }
}

export default appReducer;
