import { createReducer } from "@reduxjs/toolkit";
import { hideBar, showBar } from "./actions";
import type { BarState } from "./types";

const initialState: BarState = {
  visible: false,
  message: null,
  timer: null,
};

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
