import { createAction, createReducer } from "@reduxjs/toolkit";

export interface BarState {
  visible: boolean;
  message: string | null;
  timer: ReturnType<typeof setTimeout> | null;
}

const initialState: BarState = {
  visible: false,
  message: null,
  timer: null,
};

// Actions
const showBar = createAction<BarState>("bar/showBar");
const hideBar = createAction("bar/hideBar");
export const showMessage = (message) => (dispatch, getState) => {
  dispatch(hideBar());
  clearTimeout(getState().bar.timer);
  let timer = setTimeout(() => dispatch(hideBar()), 2000);
  setTimeout(() => dispatch(showBar({ message, timer } as BarState)), 100);
};

// Reducer
const barReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showBar, (state, action) => {
      const { message, timer } = action.payload;
      state.visible = true;
      state.message = message;
      state.timer = timer;
    })
    .addCase(hideBar, (state) => {
      state.visible = false;
    });
});

export default barReducer;
