import { HIDE_BAR, SHOW_BAR } from "../types";

const initialState = {
  visible: false,
  message: null,
  timer: null,
};

function barReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_BAR:
      return {
        visible: true,
        message: action.payload.message,
        timer: action.payload.timer,
      };
    case HIDE_BAR:
      return {
        visible: false,
        message: null,
        timer: null,
      };
    default:
      return state;
  }
}

export default barReducer;
