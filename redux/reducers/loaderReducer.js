import { SHOW_LOADER, HIDE_LOADER } from "../types";

function loaderReducer(state = false, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return true;
    case HIDE_LOADER:
      return false;
    default:
      return state;
  }
}

export default loaderReducer;
